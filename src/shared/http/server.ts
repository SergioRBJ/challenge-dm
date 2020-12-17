import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import dotenv from 'dotenv';

import { errors } from 'celebrate'

import AppError from '../../shared/errors/AppError';

import '../../shared/container';

import routes from './routes';

dotenv.config();

const app = express();

app.use(parser.json({ type: 'application/json' }));
app.use(cors({ credentials: true, origin: true }));
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.get('/', (req, res) => {
  res.send('Bem vindo a API!');
});

app.listen(3001);

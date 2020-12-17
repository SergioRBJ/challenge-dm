import { Router } from 'express';

import recipeRouter from '../../../modules/recipe/application/routes/recipe.route';

const routes = Router();

routes.use('/recipes', recipeRouter);

export default routes;

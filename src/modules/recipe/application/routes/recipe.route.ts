import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import RecipeController from '../controllers/recipe.controller';


const recipeRouter = Router();

const recipeController = new RecipeController();

recipeRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      i: Joi.string().required(),
    },
  }),
  recipeController.showRecipe,
);

export default recipeRouter;

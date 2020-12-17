import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ShowRecipesService from '../../domain/services/show-recipes.service';

class RecipeController {

  public async showRecipe(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { i } = request.query;

    const showRecipe = container.resolve(ShowRecipesService);

    const recipe = await showRecipe.execute({
      ingredients: String(i)
    });

    return response.status(200).json(classToClass(recipe));
  }

}

export default RecipeController;

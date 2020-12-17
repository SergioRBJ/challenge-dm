import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import recipeMapper from '../../application/mappers/recipe.mapper';
import { IRecipe } from '../../infra/entities/Recipe';
import GiphyRepository from '../../infra/repositories/giphy.repository';
import IRecipePuppyRepository from '../interfaces/repositories/recipe-puppy-repository.interface';

interface IRequest {
  ingredients: string;
}

@injectable()
class ShowRecipesService {
  constructor(
    @inject('RecipePuppyRepository')
    private recipePuppyRepository: IRecipePuppyRepository,

    @inject('GiphyRepository')
    private giphyRepository: GiphyRepository,
  ) {}

  public async execute({
    ingredients,
  }: IRequest): Promise<IRecipe | undefined> {
    const recipesExternal = await this.recipePuppyRepository.findByIngredients(
      ingredients,
    );

    if (!recipesExternal) {
      throw new AppError('Error when trying to redeem recipes!', 500);
    }

    const keywords = ingredients.split(',').sort();

    if (!recipesExternal.results) {
      throw new AppError('Error when trying to redeem gif!', 500);
    } else {
      const recipes = await Promise.all(
        recipesExternal?.results.map(async recipe => {
          const gifExternal = await this.giphyRepository.findByTitle(
            recipe?.title,
          );

          if (!gifExternal) {
            throw new AppError('GIPHY is out of service!', 503);
          }

          const mappedRecipes = recipeMapper(recipe, gifExternal);

          return mappedRecipes;
        }),
      );

      const recipe = {
        keywords,
        recipes,
      };

      return recipe;
    }
  }
}

export default ShowRecipesService;

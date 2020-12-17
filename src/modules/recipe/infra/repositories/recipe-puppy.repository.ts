import axios, { AxiosStatic } from 'axios';
import AppError from '../../../../shared/errors/AppError';

import IRecipePuppyRepository from '../../domain/interfaces/repositories/recipe-puppy-repository.interface';
import { IRecipePuppy } from '../entities/RecipePuppy';

class RecipePuppyRepository implements IRecipePuppyRepository {
  private apiRecipePuppyUrl: string | undefined = process.env.API_RECIPE_PUPPY_URL;

  constructor(protected request: AxiosStatic = axios) {}

  public async findByIngredients(params: string): Promise<IRecipePuppy | undefined> {
    const url = `${this.apiRecipePuppyUrl}?i=${params}`;

    const response = await this.request.get(url);

    if(response.status !== 200){
      throw new AppError('GIPHY is out of service!', 503);
    }

    const recipes = response.data;

    return recipes;
  }
}
export default RecipePuppyRepository;

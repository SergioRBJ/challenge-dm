import axios, { AxiosStatic } from 'axios';

import IRecipePuppyRepository from '../../domain/interfaces/repositories/recipe-puppy-repository.interface';
import { IRecipePuppy } from '../entities/RecipePuppy';

class RecipePuppyRepository implements IRecipePuppyRepository {
  private apiRecipePuppyUrl: string | undefined = process.env.API_RECIPE_PUPPY_URL;

  constructor(protected request: AxiosStatic = axios) {}

  public async findByIngredients(params: string): Promise<IRecipePuppy[] | undefined> {
    const url = `${this.apiRecipePuppyUrl}?i=${params}`;

    const response = await this.request.get(url);

    const recipes = response.data;

    return recipes;
  }
}
export default RecipePuppyRepository;

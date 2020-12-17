import { IRecipePuppy } from 'src/modules/recipe/infra/entities/RecipePuppy';

export default interface IRecipePuppyRepository {
  findByIngredients(params: string): Promise<IRecipePuppy | undefined>;
}

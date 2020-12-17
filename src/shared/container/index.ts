import { container } from 'tsyringe';

import IRecipePuppyRepository from '../../modules/recipe/domain/interfaces/repositories/recipe-puppy-repository.interface';
import IGiphyRepository from '../../modules/recipe/domain/interfaces/repositories/giphy-repository.interface';
import GiphyRepository from '../../modules/recipe/infra/repositories/giphy.repository';
import RecipePuppyRepository from '../../modules/recipe/infra/repositories/recipe-puppy.repository';

container.registerSingleton<IRecipePuppyRepository>(
  'RecipePuppyRepository',
  RecipePuppyRepository,
);

container.registerSingleton<IGiphyRepository>(
  'GiphyRepository',
  GiphyRepository,
);

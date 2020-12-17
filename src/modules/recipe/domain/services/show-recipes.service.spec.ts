
import FakeGiphyRepository from '../../infra/repositories/fakes/fake-giphy.repository';
import ShowRecipesService from './show-recipes.service';

let fakeGiphyRepository: FakeGiphyRepository;
//let fakeRecipePuppyRepository: FakeCustomerRepository;
let showRecipesService: ShowRecipesService;

describe('ShowRecipesService Unit Tests', () => {
  beforeEach(() => {
    fakeGiphyRepository = new FakeGiphyRepository();
    //showRecipesService = new ShowRecipesService(fakeGiphyRepository);
  });

  it('should be able to show recipe', async () => {
  });

  it('should be able to throw error when Recipe Puppy repository returns undefined', async () => {
  });

  it('should be able to throw error when GIPHY repository returns undefined', async () => {
  });

});

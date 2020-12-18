import axios from 'axios';
import AppError from '../../../../shared/errors/AppError';
import RecipePuppyRepository from './recipe-puppy.repository';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('RecipePuppyRepository Unit Tests', () => {
  it('should be return the response data of Recipe Puppy api', async () => {
    const mockResponse = {
      title: 'Recipe Puppy',
      version: 0.1,
      href: 'http://www.recipepuppy.com/',
      results: [
        {
          title: 'Guacamole Dip Recipe',
          href: 'http://cookeatshare.com/recipes/guacamole-dip-2783',
          ingredients: 'avocado, onions, tomato',
          thumbnail: 'http://img.recipepuppy.com/868469.jpg',
        },
        {
          title: 'Guacamole Dip Recipe',
          href: 'http://cookeatshare.com/recipes/guacamole-dip-3108',
          ingredients: 'avocado, onions, tomato',
          thumbnail: 'http://img.recipepuppy.com/868492.jpg',
        },
      ],
    };

    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: mockResponse,
        status: 200,
      }),
    );

    const repository = new RecipePuppyRepository();
    const result = await repository.findByIngredients('onions,tomato');

    expect(result).toBe(mockResponse);
  });

  it('should throw a error if Recipe Puppy api is unreachable', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        status: 500,
      }),
    );

    const repository = new RecipePuppyRepository();
    const result = repository.findByIngredients('onions,tomato');

    await expect(result).rejects.toBeInstanceOf(AppError);
    await expect(result).rejects.toHaveProperty(
      'message',
      'Recipe Puppy is out of service!',
    );
  });
});

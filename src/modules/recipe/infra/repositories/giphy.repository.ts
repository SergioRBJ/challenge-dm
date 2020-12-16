import axios, { AxiosStatic } from 'axios';
import IGiphyRepository from '../../domain/interfaces/repositories/giphy-repository.interface';

import { IGiphy } from '../entities/Giphy';

class GiphyRepository implements IGiphyRepository {
  private apiGiphyUrl: string | undefined = process.env.API_GIPHY_URL;
  private apiGiphyKey: string | undefined = process.env.API_GIPHY_KEY;

  constructor(protected request: AxiosStatic = axios) {}

  public async findByTitle(title: string): Promise<IGiphy | undefined> {
    const url = `${this.apiGiphyUrl}?api_key=${this.apiGiphyKey}&q=${title}`;

    const response = await this.request.get(url);

    const gif = response.data;

    return gif;
  }
}
export default GiphyRepository;

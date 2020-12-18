import { IGiphy } from '../../../../recipe/infra/entities/Giphy';

export default interface IGiphyRepository {
  findByTitle(title: string): Promise<IGiphy | undefined>;
}

import { HttpService } from './HttpService';
import { Character, CharacterPagination } from './types';

export class RickAndMortyService extends HttpService {
  constructor() {
    super('https://rickandmortyapi.com/api');
  }

  async getCharactersByIds(ids: number[]) {
    try {
      const response = await this.get('/character/[' + ids + ']');
      return response.data as Character[];
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getCharactersByQuery(filters: Object) {
    try {
      const queryParams = Object.entries(filters)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
        )
        .join('&');

      const response = await this.get(`/character?${queryParams}`);
      return response.data as CharacterPagination;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

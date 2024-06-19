import { useEffect, useState } from 'react';
import { RickAndMortyService } from '../services';
import { Character, CharacterPagination } from '../services/types';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersPagination, setCharactersPagination] = useState<CharacterPagination>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nextIds, setNextIds] = useState(10);

  const getCharacters = async () => {
    setLoading(true);
    const service = new RickAndMortyService();
    try {
      const n = nextIds / 10;
      const ids = Array.from(
        { length: 10 },
        (_, index) => index + 1 + (characters.length ? 10 * n : 0),
      );

      const response = await service.getCharactersByIds(ids);
      setNextIds(nextIds + 10);
      setCharacters(prev => [...prev, ...response]);
    } catch (error) {
      setError(false);
    }

    setLoading(false);
  };

  const getCharactersByQuery = async (filters: Object) => {
    setLoading(true);
    const service = new RickAndMortyService();
    try {
      const response = await service.getCharactersByQuery(filters);
      setCharactersPagination(response);
    } catch (error) {
      setError(false);
    }

    setLoading(false);
  };

  const clear = () => {
    setCharactersPagination(undefined);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters: charactersPagination?.results ?? characters,
    error,
    loading,
    getCharacters,
    getCharactersByQuery,
    clear,
  };
};

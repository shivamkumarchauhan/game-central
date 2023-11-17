import useData from './useData';
import { Genres } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    rating: number;
    name: string;
    background_image: string;
    ratings_count: number;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
const useGames = (selectedGenre: Genres | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames
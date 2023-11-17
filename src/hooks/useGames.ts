import { Query } from '../App';
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
  
const useGames = (query: Query) =>
useData<Game>('/games', {
  params: {
    genres: query.genre?.id,
    parent_platforms: query.platform?.id
  }
}, [query]);

export default useGames
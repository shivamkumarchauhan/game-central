import { Query } from '../App';
import useData from './useData';

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
    rating_top: number
  }
  
const useGames = (query: Query) =>
useData<Game>('/games', {
  params: {
    genres: query.genre?.id,
    parent_platforms: query.platform?.id,
    ordering: query.sortType,
    search: query.searchText
  }
}, [query]);

export default useGames
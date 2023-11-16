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
  }
  
const useGames = () => useData<Game>('/games');

export default useGames
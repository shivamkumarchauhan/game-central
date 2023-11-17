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
  
const useGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null) =>
useData<Game>('/games', {
  params: {
    genres: selectedGenre?.id,
    parent_platforms: selectedPlatform?.id
  }
}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames
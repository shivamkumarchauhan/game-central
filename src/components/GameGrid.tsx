import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameContainer from "./GameContainer";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5}>
        {isLoading &&
          items.map((skeleton) => (
            <GameContainer key={skeleton}>
              <CardSkeleton />
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer key={game.id}>
            <GameCard game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

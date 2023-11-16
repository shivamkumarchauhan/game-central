import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameContainer from "./GameContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10}>
        {isLoading &&
          items.map((skeleton) => (
            <GameContainer>
              <CardSkeleton key={skeleton} />{" "}
            </GameContainer>
          ))}
        {data.map((game) => (
          <GameContainer>
            <GameCard key={game.id} game={game} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

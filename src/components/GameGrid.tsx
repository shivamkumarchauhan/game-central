import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameContainer from "./GameContainer";
import { Query } from "../App";

interface Props {
  query: Query;
}

const GameGrid = ({ query }: Props) => {
  const { data, error, isLoading } = useGames(query);
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={5}
      marginY={3}
    >
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
  );
};

export default GameGrid;

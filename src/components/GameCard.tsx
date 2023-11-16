import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.background_image}
      />
      <CardBody marginY={0.5}>
        <HStack display="flex" justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Stack mt="6" spacing="3" marginY={1}>
          <Heading size="md">{game.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {game.ratings_count}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

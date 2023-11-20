import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={
          getCroppedImageUrl(game.background_image).match(/placeholder/)
            ? "<a href='https://www.freepik.com/free-ai-image/3d-workstation-with-computer-peripheral-devices_60908692.htm#query=gaming%20laptop%20placeholder%20image&position=0&from_view=search&track=ais&uuid=3a5cd5f2-a5e5-404b-8a3e-e195f904fd4f'>Image By freepik</a>"
            : game.background_image
        }
      />
      <CardBody marginY={0.5}>
        <HStack display="flex" justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Stack mt="6" spacing="3" marginY={1}>
          <Heading size="md">
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
          {/* <Text color="blue.600" fontSize="2xl">
            {game.ratings_count}
          </Text> */}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

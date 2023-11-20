import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";
import ListContainer from "./ListContainer";
import ListSkeleton from "./ListSkeleton";

interface Props {
  onClickTitle: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onClickTitle, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          items.map((skeleton) => (
            <ListContainer key={skeleton}>
              <ListSkeleton />
            </ListContainer>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={30}
                borderRadius={6}
                objectFit="cover"
              ></Image>
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                text-align="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onClickTitle(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

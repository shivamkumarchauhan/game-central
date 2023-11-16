import { HStack, Text, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";
import ListContainer from "./ListContainer";
import ListSkeleton from "./ListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List>
      {isLoading &&
        items.map((skeleton) => (
          <ListContainer key={skeleton}>
            <ListSkeleton key={skeleton} />
          </ListContainer>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={30}
              borderRadius={6}
            ></Image>
            <Text fontSize="lg" fontWeight="normal">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

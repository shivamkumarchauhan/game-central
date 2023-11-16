import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const ListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <Skeleton height="30px" width="50px" />
          <SkeletonText
            width="180px"
            height="30px"
            noOfLines={3}
            skeletonHeight="1"
          />
        </HStack>
      </ListItem>
    </List>
  );
};

export default ListSkeleton;

import { Heading } from "@chakra-ui/react";
import { Query } from "../App";

interface Props {
  query: Query;
}

const GameTitle = ({ query }: Props) => {
  const title = `${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="6xl">
      {title}
    </Heading>
  );
};

export default GameTitle;

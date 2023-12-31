import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="250px">
      {children}
    </Box>
  );
};

export default ListContainer;

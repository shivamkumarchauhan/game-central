import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FaSearch />
      </InputLeftElement>
      <Input type="text" placeholder="Search Games" />
    </InputGroup>
  );
};

export default Search;

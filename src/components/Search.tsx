import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      // onSubmit={(event) => {
      //   event.preventDefault();
      //   if (ref.current) onSearch(ref.current.value);
      // }}
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input ref={ref} type="text" placeholder="Search Games" />
      </InputGroup>
    </form>
  );
};

export default Search;

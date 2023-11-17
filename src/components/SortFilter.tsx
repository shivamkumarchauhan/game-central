import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onClickItem: (sortType: string) => void;
  sortType: string;
}

const SortFilter = ({ onClickItem, sortType }: Props) => {
  const sortTypes = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentType = sortTypes.find((type) => type.value === sortType);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentType?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortTypes.map((type) => (
          <MenuItem
            onClick={() => onClickItem(type.value)}
            key={type.value}
            value={type.value}
          >
            {type.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortFilter;

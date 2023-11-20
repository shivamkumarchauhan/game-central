import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/OSKHFO0.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
  onSearch: (searchText: string) => void;
}

const Header = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px" margin="0 0 20px 0">
      <Image src={logo} alt="Game Central" boxSize="70px" />
      <Search onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;

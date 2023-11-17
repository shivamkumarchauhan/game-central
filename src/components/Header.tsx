import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/OSKHFO0.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const Header = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px" margin="0 0 40px 0">
      <Image src={logo} alt="Game Central" boxSize="70px" />
      <Search />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;

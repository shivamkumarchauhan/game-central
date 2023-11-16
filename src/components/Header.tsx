import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/OSKHFO0.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} alt="Game Central" boxSize="70px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;

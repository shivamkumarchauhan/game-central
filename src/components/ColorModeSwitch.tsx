import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} border="2px solid #63b3ed">
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ColorModeSwitch;

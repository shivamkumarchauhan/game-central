import { Button, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} border="2px solid green">
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ColorModeSwitch;

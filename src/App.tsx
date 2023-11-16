import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "left-nav main"`,
      }}
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area={"left-nav"}>Left Nav</GridItem>
      </Show>
      <GridItem area={"main"}>
        {/* <GameGrid /> */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

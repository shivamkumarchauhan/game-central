import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <Grid
      margin="0 20px"
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "left-nav main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem>
          <GenreList
            onClickTitle={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

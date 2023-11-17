import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import { Platform } from "./hooks/useGames";

export interface Query {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [query, setQuery] = useState<Query>({} as Query);

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
            onClickTitle={(genre) => setQuery({ ...query, genre })}
            selectedGenre={query.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformFilter
          onSelect={(platform) => setQuery({ ...query, platform })}
          selectedPlatform={query.platform}
        />
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;

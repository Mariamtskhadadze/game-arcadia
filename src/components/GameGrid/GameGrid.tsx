import { SimpleGrid, Text } from "@chakra-ui/react";
import useData from "../../hooks/useData";
import { GameType } from "../../types";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";

const GameGrid = () => {
  const { data, error, loading } = useData<GameType>('/games');
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {loading && Skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

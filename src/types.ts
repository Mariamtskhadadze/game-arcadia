export type GameType = {
  id: number;
  name: string;
  background_image: string;
};

export type GamesResponse = {
  count: number;
  results: GameType[];
};

export type GameProps = {
  game: GameType;
};

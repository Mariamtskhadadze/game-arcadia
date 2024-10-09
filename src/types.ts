export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type GameType = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

export type GamesResponse = {
  count: number;
  results: GameType[];
};

export type GameProps = {
  game: GameType;
};

export type PlatformListProps = {
  platforms: Platform[]
}

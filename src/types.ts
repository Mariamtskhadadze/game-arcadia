import { ReactNode } from "react";

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
  metacritic: number;
};

export type GamesResponse = {
  count: number;
  results: GameType[];
};

export type GameProps = {
  game: GameType;
};

export type PlatformListProps = {
  platforms: Platform[];
};

export type CriticScoreProps = {
  score: number;
};

export type GameCardContainerProps = {
  children: ReactNode;
};

export type GenresProps = {
  id: number;
  name: string;
};

export type DataResponse<T> = {
  count: number;
  results: T[]
}
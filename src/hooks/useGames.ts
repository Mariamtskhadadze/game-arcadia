import { GameType, GenresProps, Platform } from "../types";
import useData from "./useData";

const useGames = (
  selectedGenre: GenresProps | null,
  selectedPlatform: Platform | null
) =>
  useData<GameType>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;

import { useEffect, useState } from "react";
import { GamesResponse, GameType } from "../types";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  });
  return { games, error, loading };
};

export default useGames;

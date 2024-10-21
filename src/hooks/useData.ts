import { useState, useEffect } from "react";
import { DataResponse } from "../types";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<DataResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  });
  return { data, error, loading };
};

export default useData;

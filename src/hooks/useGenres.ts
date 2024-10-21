import { GenresProps } from "../types";
import useData from "./useData";

const useGenres = () => useData<GenresProps>("/genres");

export default useGenres;

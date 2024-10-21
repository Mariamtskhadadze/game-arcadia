import { GenresProps } from "../../types";
import useData from "../../hooks/useData";

const GenresList = () => {
  const { data } = useData<GenresProps>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;

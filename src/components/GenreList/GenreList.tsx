import { Heading, List } from "@chakra-ui/react";
import { GenreListProps, GenresProps } from "../../types";
import useData from "../../hooks/useData";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";
import GenreListItem from "../GenreListItem/GenreListItem";

const GenresList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, loading, error } = useData<GenresProps>("/genres");

  if (error) return null;
  if (loading) return <GenreListSkeleton />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <GenreListItem
            selectedGenre={selectedGenre}
            genre={genre}
            onSelectGenre={onSelectGenre}
            key={genre.id}
          />
        ))}
      </List>
    </>
  );
};

export default GenresList;

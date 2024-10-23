import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { GenreListProps, GenresProps } from "../../types";
import useData from "../../hooks/useData";
import { getCroppedImageUrl } from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";

const GenresList = ({ onSelectGenre }: GenreListProps) => {
  const { data, loading, error } = useData<GenresProps>("/genres");

  if (error) return null;
  //? Add skeleton
  if (loading) return <GenreListSkeleton />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

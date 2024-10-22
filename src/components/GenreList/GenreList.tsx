import { GenreListProps, GenresProps } from "../../types";
import useData from "../../hooks/useData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../../services/image-url";

const GenresList = ({ onSelectGenre }: GenreListProps) => {
  const { data, loading, error } = useData<GenresProps>("/genres");

  if (error) return null;
  //? Add skeleton
  if (loading) return <Spinner />;
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

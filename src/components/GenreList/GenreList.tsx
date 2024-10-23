import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { GenreListProps, GenresProps } from "../../types";
import useData from "../../hooks/useData";
import { getCroppedImageUrl } from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";

const GenresList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, loading, error } = useData<GenresProps>("/genres");

  if (error) return null;
  //? Add skeleton
  if (loading) return <GenreListSkeleton />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={1} overflow="hidden">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <VStack>
              <Button
                fontWeight={
                  selectedGenre && genre.id === selectedGenre?.id
                    ? "bold"
                    : "normal"
                }
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant="link"
              >
                {genre.name}
              </Button>
            </VStack>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;

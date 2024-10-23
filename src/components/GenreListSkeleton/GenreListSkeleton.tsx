import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack paddingY={1}>
          <Skeleton boxSize="32px" borderRadius={8} />
          <Skeleton height="20px" width="100px" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;

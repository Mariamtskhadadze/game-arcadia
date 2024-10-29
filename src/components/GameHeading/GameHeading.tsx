import { Heading } from "@chakra-ui/react";
import { GameHeadingProps } from "../../types";

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const headingParts = ["Games"];
  if (gameQuery.platform) headingParts.unshift(gameQuery.platform.name);
  if (gameQuery.genre) headingParts.unshift(gameQuery.genre.name);

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingParts.join(" ")}
    </Heading>
  );
};

export default GameHeading;

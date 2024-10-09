import { Badge } from "@chakra-ui/react";
import { CriticScoreProps } from "../../types";

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ""
  return <Badge colorScheme={color} fontSize={"14px"}>{score}</Badge>;
};

export default CriticScore;

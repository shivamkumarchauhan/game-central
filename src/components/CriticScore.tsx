import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      border="1px solid"
      borderRadius="4px"
      colorScheme={color}
      fontSize={"14px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

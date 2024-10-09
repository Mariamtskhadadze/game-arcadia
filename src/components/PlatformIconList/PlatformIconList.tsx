import { HStack, Icon } from "@chakra-ui/react";
import { PlatformListProps } from "../../types";
import { iconMap } from "../../utils/iconMap";

const PlatformIconList = ({ platforms }: PlatformListProps) => {
  return (
    <HStack marginTop={3}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

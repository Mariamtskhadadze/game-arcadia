import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/themes/logo/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

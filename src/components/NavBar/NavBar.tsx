import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/themes/logo/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";
import { SearchInputProps } from "../../types";

const NavBar = ({onSearch}: SearchInputProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

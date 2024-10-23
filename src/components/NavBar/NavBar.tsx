import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/themes/logo/logo(1).png";
import style from "./NavBar.module.css";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image className={style.navbar_logo} src={logo}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

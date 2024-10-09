import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
// import {SiNintendo} from 'react-icons/si'
import {BsGlobe, BsNintendoSwitch} from 'react-icons/bs'
import { IconType } from 'react-icons'

export const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe
};


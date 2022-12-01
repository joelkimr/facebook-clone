import React from "react";
import SidebarRow from "../sidebarRow/SidebarRow";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ForumIcon from "@mui/icons-material/Forum";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useStateValue } from "../../../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title='FEVER Information Center' />
      <SidebarRow Icon={FlagIcon} title='Pages' />
      <SidebarRow Icon={SupervisedUserCircleIcon} title='Friends' />
      <SidebarRow Icon={ForumIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreIcon} title='Marketplace' />
    </div>
  );
}

export default Sidebar;

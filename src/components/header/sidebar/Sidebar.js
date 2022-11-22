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

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow
        src='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57ead44&v=4'
        title='ccccna'
      />
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

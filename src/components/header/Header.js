import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt='facebook_logo'
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='medium' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='medium' />
        </div>
        <div className='header__option'>
          <SubscriptionsIcon fontSize='medium' />
        </div>
        <div className='header__option'>
          <StorefrontIcon fontSize='medium' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='medium' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>ccccena</h4>
        </div>

        <IconButton>
          <AddIcon fontSize='small' />
        </IconButton>
        <IconButton>
          <ForumIcon fontSize='small' />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon fontSize='small' />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon fontSize='small' />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

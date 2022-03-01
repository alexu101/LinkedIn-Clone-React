import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import logo from "./pics/linkedin.png";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="img"
                />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="Me" />
            </div>
        </div>
    )
}

export default Header

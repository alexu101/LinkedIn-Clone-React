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
import { logout, selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

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
                <HeaderOption avatar={true} title="Me" onClick={() => {
                    dispatch(logout());
                    auth.signOut();
                }} />
            </div>
        </div>
    )
}

export default Header

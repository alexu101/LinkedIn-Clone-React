import React from 'react'
import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    console.log(user);
    console.log("okey");
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className='headerOption__icon' src={user?.profileURL} alt="nimic" onClick={onClick}>{user?.email[0]}
            </Avatar>}
            <div className="headerOption__title">{title}</div>
        </div>
    )
}

export default HeaderOption
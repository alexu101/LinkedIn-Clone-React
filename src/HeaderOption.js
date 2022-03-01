import React from 'react'
import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"

function HeaderOption({ avatar, Icon, title }) {
    const user = useSelector(selectUser);

    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar className='headerOption__icon' src={user?.profileURL} alt="nimic" >{user?.email[0]}</Avatar>}
            <div className="headerOption__title">{title}</div>
        </div>
    )
}

export default HeaderOption
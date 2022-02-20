import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";



function Sidebar() {

    const recentItem = function (topic) {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">
                    #
                </span>
                <p>{topic}</p>
            </div>)
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className='sidebar__top__background' src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <Avatar className="sidebar__avatar" src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />
                <h2>Alex Tanase</h2>
                <h4>alextanase60@yahoo.com</h4>
                <h3>@Student at UAIC, Faculty of Computer Science, open to internship opportunites!</h3>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">
                        2,448
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
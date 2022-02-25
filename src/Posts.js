import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import "./Posts.css";
import FeedOption from "./FeedOption.js"

function Posts({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Alex Tanase</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post__body">
                <p>Message goes here</p>
            </div>

            <div className="post__buttons">
                <FeedOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <FeedOption Icon={ChatOutlined} title="Comment" color="gray" />
                <FeedOption Icon={ShareOutlined} title="Share" color="gray" />
                <FeedOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Posts
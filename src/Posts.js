import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import "./Posts.css";
import FeedOption from "./FeedOption.js"
import { forwardRef } from 'react';

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <FeedOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <FeedOption Icon={ChatOutlined} title="Comment" color="gray" />
                <FeedOption Icon={ShareOutlined} title="Share" color="gray" />
                <FeedOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Posts
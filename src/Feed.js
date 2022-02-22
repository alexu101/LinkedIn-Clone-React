import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import PostModal from "./PostModal.js";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
            <PostModal />
        </div>
    )
}

export default Feed
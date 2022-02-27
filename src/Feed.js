import React, { useEffect } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FeedOption from "./FeedOption.js"
import EventNoteIcon from '@mui/icons-material/EventNote';
import { CalendarViewDay } from '@mui/icons-material';
import "./FeedOption.css";
import { useState } from 'react';
import Posts from './Posts';
import { db } from "./firebase.js"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            ))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Alex Tanase',
            description: 'this is a test',
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form
                    >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__feedOptions">
                    <FeedOption Icon={ImageIcon} title={'Photo'} color="#7085F9" />
                    <FeedOption Icon={SubscriptionsIcon} title={'Video'} color="#E7A33E" />
                    <FeedOption Icon={EventNoteIcon} title={'Event'} color="#C0CBCD" />
                    <FeedOption Icon={CalendarViewDay} title={'Write article'} color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Posts
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            <Posts name='Tanase Alex' description='This is a test' message='Wow this is amazing' />
        </div >
    )
}

export default Feed
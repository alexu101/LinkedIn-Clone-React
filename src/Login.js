import React from 'react';
import './Login.css';
import logologin from "./pics/logologin.png"
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "./firebase.js"
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice";

function Login() {

    const [profilePic, setProfilePic] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!fullName)
            return alert('Please enter a full name!');
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: fullName,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: fullName,
                    photoUrl: profilePic,
                }))
            }).catch(error => alert(error))
        })

    };

    const loginToApp = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                );
            })
            .catch(error => alert(error));
    };

    return (
        <div className='login'>
            <img src={logologin} alt="" />

            <form>
                <input value={fullName} onChange={event => { setFullName(event.target.value) }} placeholder="Full name (required if registering)" type="text" />

                <input placeholder='Profile pic URL (optional)' onChange={event => setProfilePic(event.target.value)} type="text" />

                <input placeholder='Email' onChange={event => setEmail(event.target.value)} type="email" />

                <input placeholder='Password' onChange={event => setPassword(event.target.value)} type="password" />

                <button type='submit' onClick={loginToApp}>
                    Sign in
                </button>

            </form>

            <p>Not a member ?
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>

    )
}

export default Login
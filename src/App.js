import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from "./features/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Login from "./Login.js"
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser);

  /*const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.profilePic,
        }))
      }
      else {
        dispatch(logout());
      }
    });
  })*/

  return (
    <div className="App">
      Header
      <Header />
      {!user ? (<Login />)
        : (
          < div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        )}
    </div >

  );
}


export default App;

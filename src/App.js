import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import Login from "./Login.js"

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {!user ? (<Login />)
        : (
          < div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        )
      }


    </div >
  );
}

export default App;

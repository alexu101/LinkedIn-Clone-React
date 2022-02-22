import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        {/* SIdebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

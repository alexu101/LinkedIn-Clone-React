import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

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
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. new changes will appear here
        </p>
        <a
          onClick={() => {
            window.location.href = 'details.html';
          }}
        >
          Go to Details
        </a>
      </header>
    </div>
  );
}

export default App;

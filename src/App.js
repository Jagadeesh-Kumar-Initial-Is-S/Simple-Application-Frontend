import Advertisement from './Advertisement';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Advertisement />
        <a class="animated-button1" onClick={callApi}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Call API
        </a>
        <Advertisement />
      </header>
    </div>
  );
}

function callApi() {
  fetch('https://simple-application-backend.vercel.app/details', { method: 'GET' })
    .then(data => data.json())
    .then(json => alert(JSON.stringify(json)))
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

function callApi() {
  fetch('https://simple-application-backend.vercel.app/details', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringlify(json)))
}

export default App;

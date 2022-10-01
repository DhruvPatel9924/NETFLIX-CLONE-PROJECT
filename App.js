import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
     <h1>NETFLIX-CLONE</h1>
    
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />
    </div>
  );
}

export default App;

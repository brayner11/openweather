import './assets/App.css';
import NavBar from './components/navBar';
import WeatherPanel from './components/WeatherPanel'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />

    </div>
  );
}

/*{ <Router>
  <div className="App">
    <NavBar />
    <WeatherPanel />
  </div>
</Router> }*/

export default App;

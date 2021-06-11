import { Route } from 'react-router';
import './App.css';
import NavBar from "./components/NavBar"
import NewPlanet from "./components/NewPlanet"
import PlanetCard from './components/PlanetCard';
import PlanetList from "./components/PlanetList"
import SolarSystem from './components/SolarSystem';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/">
        <NewPlanet />
      </Route>
      <Route exact path="/planetaryList">
        <PlanetList />
      </Route>
      <Route exact path="/planet/:id">
        <PlanetCard />
      </Route>
      <Route exact path="/solarSystem">
        <SolarSystem />
      </Route>
      
    </div>
  );
}

export default App;

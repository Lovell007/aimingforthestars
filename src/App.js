import { Route } from 'react-router';
import './App.css';
import NavBar from "./components/NavBar"
import NewPlanet from "./components/NewPlanet"
import PlanetList from "./components/PlanetList"

function App() {
  return (
    <div>
      <NavBar />
      <NewPlanet />
      <Route exact path="/planetaryList">
        <PlanetList />
      </Route>
      
    </div>
  );
}

export default App;

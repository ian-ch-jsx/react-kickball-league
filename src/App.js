import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Players from './views/Players/Players';
import Player from './views/Players/Player';
import Teams from './views/Teams/Teams';
import Team from './views/Teams/Team';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/players" exact>
            Players
          </NavLink>
          <NavLink to="/teams" exact>
            Teams
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/players" exact component={Players} />
          <Route path="/players/:id" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

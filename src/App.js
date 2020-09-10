import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Game from './pages/Game';
import HighScore from './pages/HighScore';
function App() {

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/game'>
          <Game />
        </Route>
        <Route exact path='/high-scores'>
          <HighScore />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>

    </>
  );
}

export default App;

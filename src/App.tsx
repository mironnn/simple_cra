import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Game from './components/game';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
    </Switch>
  );
}

export default App;

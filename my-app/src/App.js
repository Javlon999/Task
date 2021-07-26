
import './App.css';
import React from 'react';
import { Route, Switch, } from "react-router-dom";
import  Allmovies  from "./Container/Allmovies";
import  SingleMovie  from "./Container/SingleMovie";
function App() {

  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Allmovies} />
        <Route path='/movies/:id' component={SingleMovie} />
      </Switch>
    </div>
  );
}

export default App;

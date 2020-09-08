import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Movie from './components/movies/Movie';
import About from './components/pages/About';
import Nominations from './components/nominations/Nominations';
import ErrorNotFound from './components/pages/ErrorNotFound';

import ShoppiesState from './context/shoppies/ShoppiesState';

import './App.css';
import NominationState from './context/nominations/NominationsState';

const App = () => {

    return (
      <ShoppiesState>
        <NominationState>
        <Router>

          <div className="App">
            <NavBar title='Shoppies' />
        

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/nominations' component={Nominations} />
              <Route exact path ='/about' component={About} />
              <Route exact path='/movie/:imdbID' component={Movie} />
              <Route component={ErrorNotFound} />
            </Switch>

          </div>      
        </Router>
        </NominationState>
      </ShoppiesState>
    );
  }


export default App;

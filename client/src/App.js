import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Movies from './components/movies/Movies';
import Movie from './components/movies/Movie';
import Search from './components/movies/Search';
import About from './components/pages/About';
import axios from 'axios';
import ShoppiesState from './context/shoppies/ShoppiesState';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=f52ad4e6')
    
  //   this.setState({ movies: res.data, loading: false })

  //   console.log(res.data)
  // }

    return (
      <ShoppiesState>
        <Router>

          <div className="App">
            <NavBar title='Shoppies' />
        

            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>

                  <Search />
                  <Movies loading={loading} />

                </Fragment>
              )} />
              <Route exact path ='/about' component={About} />
              <Route exact path='/movie/:imdbID' render={props => (
                <Movie {...props} loading={loading} />
              )} />
            </Switch>

          </div>      
        </Router>
      </ShoppiesState>
    );
  }

  // PropTypes
App.propTypes = {
    searchMovies: PropTypes.func.isRequired
  }

export default App;

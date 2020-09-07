import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Movies from './components/movies/Movies';
import Search from './components/movies/Search';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    movies: {},
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=f52ad4e6')
    
    this.setState({ movies: res.data, loading: false })

    console.log(res.data)
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Shoppies' />
        <Search />
        <Movies loading={this.state.loading} movies={this.state.movies} />
        {/* <MovieItem /> */}
      </div>
    );
  }

}

export default App;

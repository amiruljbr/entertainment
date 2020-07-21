import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js';
import Movies from './pages/Movies.js';
import TvSeries from './pages/TvSeries.js';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/config.js';
import AddMovie from './pages/AddMovie';
import DetailMovie from './pages/DetailMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            EntertainMe App
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item mr-1 ml-1">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item mr-1 ml-1">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="nav-item mr-1 ml-1">
                  <Link to="/tv">TV Series</Link>
                </li>
                {/* <li className="nav-item mr-1 ml-1">
                  <Link to="/cart">Cart</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/add">
              <AddMovie />
            </Route>
            <Route path="/tv">
              <TvSeries />
            </Route>
            <Route path="/edit/:id">
              <EditMovie />
            </Route>
            <Route path="/detail/:id">
              <DetailMovie />
            </Route>
            {/* <Route path="/add">
              <AddBook />
            </Route>
            <Route path="/book/:bookId">
              <Detail />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

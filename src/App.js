import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from './components/Add';
import Watchlist from './components/Watchlist';
import Header from './components/Header'
import { MovieProvider } from './Context';
export default function App() {
    return (
        <div>
            <MovieProvider>

           
           <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
         </Switch>
      </Router>
     </MovieProvider>
        </div>
    )
}

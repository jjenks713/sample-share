import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Index from './pages/index';
import Sounds from './pages/sounds'
import User from './pages/user'

function App() {
  return (
    <div>
      <Router>
      <Nav fixed="top" />
        <Switch>
            <Route path="/sounds">
                <Sounds />         
            </Route>
            <Route path="/user"> {/* user id will go with path :id */}
                <User/>         
            </Route>
            <Route path="/">
              <Index />           
            </Route>

        </Switch>
      </Router>

    </div>


  );
}

export default App;

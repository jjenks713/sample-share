import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/index';
import Sounds from './pages/sounds'

function App() {
  return (
    <div>
      <Router>
      <Nav fixed="top" />
      <Main/>

        <Switch>
          <Route exact path="/" element={<Main/>}>           
            </Route>
            <Route path="/sounds" element={<Sounds/>}>         
            </Route>
        </Switch>

      </Router>

    </div>


  );
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import Data from "./components/Data";
import UpdateForm from "./components/UpdateForm";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EditEmployee from "./components/EditEmployee";
import AddEmployee from "./components/AddEmployee";

class App extends Component {


  render() {
 

    return (
      <Router>
        <div>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>  
            <Link to="/update">Update</Link>
          </li>

          </ul>
          <Switch>
          <Route exact path="/">
            <Home></Home>
       </Route>
       <Route exact path="/create"><AddEmployee></AddEmployee></Route>
       <Route exact path="/update"><EditEmployee></EditEmployee></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
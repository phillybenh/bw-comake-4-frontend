import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

// components
import Login from './components/loginRegister';
import PrivateRoute from "./utils/PrivateRoute"

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App Header</h1>
      </header>
      <Switch>
        {/* <PrivateRoute path="/main" component={XYZ}> */}
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

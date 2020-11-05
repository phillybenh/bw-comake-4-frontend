import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

// components
import Login from "./components/loginRegister";
import Main from "./components/main";
import UserProfile from "./components/userProfile";
import MyIssues from "./components/myIssues";
import EditIssue from "./components/editIssue";
import PrivateRoute from "./utils/PrivateRoute";



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-h1'>Co-make-4</h1>      
      </header>
   

      <Switch>
        <PrivateRoute path="/main" component={Main} /> 
        <PrivateRoute path="/editIssue/:id" component={EditIssue} />
        <PrivateRoute path="/myIssues" component={MyIssues} />
        <PrivateRoute path="/userProfile" component={UserProfile} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

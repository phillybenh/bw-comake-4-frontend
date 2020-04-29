
import React, { useState } from 'react';
import { BrowserRouter as Route, Switch, Link, NavLink } from "react-router-dom";


// components
import Login from './components/loginRegister';
import UserProfile from './components/userProfile';
import MyIssues from './components/myIssues'
import PrivateRoute from "./utils/PrivateRoute";
import IssueForm from './IssueForm';
import Issues from './Issues';

// styles
import './App.css';


function App() {
  const [issueBoard, setIssueBoard] = useState ([
    {
    id: 1,
    title: 'Potholes',
    description: 'There are potholes all around our city!'
  }
])

const addNewIssue = note => {
  const newIssue = {
    id:Date.now(),
    title: note.title,
    description: note.description
  }
  setIssueBoard([...issueBoard, newIssue])
}




  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-make 4</h1>
      </header>
      <h2>Submit New Issue</h2>
      <IssueForm addNewIssue={addNewIssue} />
      <Issues issue={issueBoard} />
      <Switch>
        {/* TODO: Set non-login pages to be protected routes
        <PrivateRoute path="/main" component={XYZ}> */}
        <PrivateRoute path="/myIssues" component={MyIssues} />
        <PrivateRoute path="/userProfile" component={UserProfile} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

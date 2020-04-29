
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";


// components
import Login from './components/loginRegister';
import UserProfile from './components/userProfile';
import PrivateRoute from "./utils/PrivateRoute";
import IssueForm from './IssueForm';
import Issues from './Issues';

// styles
import './App.css';
import styled from 'styled-components';

const NewForm = styled.form `
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
`

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
        <h1 className='App-h1'>Co-make-4</h1>      
      </header>
    <div className='borderDiv'>
     <h2 className='SubmitIssue'>Submit New Issue</h2>
      <NewForm>
        <IssueForm addNewIssue={addNewIssue}/>
      </NewForm>
     </div>
        <Issues issue={issueBoard} />
      <Switch>
        {/* TODO: Set non-login pages to be protected routes
        <PrivateRoute path="/main" component={XYZ}> */}
        <PrivateRoute path="/userProfile" component={UserProfile} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

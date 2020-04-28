import React, {useState} from 'react';
import './App.css';
import IssueForm from './IssueForm';
import Issues from './Issues'

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
        <IssueForm addNewIssue={addNewIssue}/>
        <Issues issue={issueBoard} />
    </div>
  );
}

export default App;

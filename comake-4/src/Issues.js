import React from 'react';

const Issues = props => {
    return (
      <div className="localIssuesList">
          <h1>Local Issues</h1>
          {props.issue.map(e =>(
              <div className= 'localIssue' key={e.id}>
                  <h2>{e.title}</h2>
                  <p>{e.description}</p>
              </div>
          ))}     
      </div>
    );
  }

  export default Issues;
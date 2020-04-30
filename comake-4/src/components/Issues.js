import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    width: 70%;
    margin-bottom: 5%;
    padding-top: 1.3%;
    padding-bottom: 1.3%

`

const H2Card = styled.h2 `
    border: 1px solid gray;
    width: 70%;
    text-align: center;
    `

const Issues = props => {
    return (
      <div className="localIssuesList">
          <h1>Local Issues</h1>
          {props.issue.map(e =>(
              <DivCard key={e.id}>
                  <H2Card>{e.short_description}</H2Card>
                  <p>{e.description}</p>
                  <p>{e.zip_code}</p>
              </DivCard>
          ))}     
      </div>
    );
  }

  export default Issues;
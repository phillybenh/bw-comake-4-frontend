import React, { useState } from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import IssueForm from "./IssueForm";
import Issues from "./Issues";

const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`

const NewButton = styled.button `
  cursor: pointer;
  background-color: #8A2BE2;
  width: 180px;
  color: #fff;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  
`

const Main = () => {
    const { push } = useHistory();

    const [issueBoard, setIssueBoard] = useState([
        {
            id: 1,
            short_description: "Potholes",
            description: "There are potholes all around our city!",
            zip_code: '07012'
        },
    ]);

    const addNewIssue = (note) => {
        const newIssue = {
            // id: Date.now(),
            short_description: note.short_description,
            description: note.description,
            zip_code: note.zip_code
        };
        setIssueBoard([...issueBoard, newIssue]);
    };
    return (
        <>
            <header>
                <nav>
                    <NewButton onClick={() => push("/userProfile")}>User Profile</NewButton>
                    {/* <button onClick={() => push("/main")}>Main</button> */}
                </nav>
            </header>
            <div className='borderDiv'>
                <h2 className='SubmitIssue'>Submit New Issue</h2>
                <NewForm>
                    <IssueForm addNewIssue={addNewIssue} />
                </NewForm>
            </div>
            <Issues issue={issueBoard} />
        </>
    )
}
export default Main;
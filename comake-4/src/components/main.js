import React, { useState } from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";




import IssueForm from "./IssueForm";
import Issues from "./Issues";

const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
`

const Main = () => {
    const { push } = useHistory();

    const [issueBoard, setIssueBoard] = useState([
        {
            id: 1,
            title: "Potholes",
            description: "There are potholes all around our city!",
        },
    ]);

    const addNewIssue = (note) => {
        const newIssue = {
            id: Date.now(),
            title: note.title,
            description: note.description,
        };
        setIssueBoard([...issueBoard, newIssue]);
    };
    return (
        <>
            <header>
                <nav>
                    <button onClick={() => push("/userProfile")}>User Profile</button>
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
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from "../utils/axiosWithAuth"

const DivCard = styled.div`
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

const H2Card = styled.h2`
    border: 1px solid gray;
    width: 70%;
    text-align: center;
    `
const NewButton = styled.button`
  cursor: pointer;
  background-color: #8A2BE2;
  width: 180px;
  color: #fff;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;  
`
const Issues = props => {

    const [allIssues, setAllIssues] = useState([]);
    const [modified, setModified] = useState(1);


    useEffect(() => {
        axiosWithAuth()
            .get("/issues")
            .then((res) => {
                // console.log({ res });
                setAllIssues(res.data)
            })
            .catch((err) => {
                console.log({ err });
            });
    }, [modified])

    console.log({ allIssues })

    const upvote = issue => {
        // console.log(issue)
        const upValue = {value: 1};
        console.log(upValue)

        axiosWithAuth()
            .put(`/issues/${issue.id}`, upValue)
            .then((res) => {
                console.log({ res });
                setModified(modified + 1)
            })
            .catch((err) => {
                console.log({ err });
            });
    }

    const downvote = issue => {
        // console.log(issue)
        const downValue = { value: -1 };
        console.log({ downValue})

        axiosWithAuth()
            .put(`/issues/${issue.id}`, downValue)
            .then((res) => {
                console.log({ res });
                setModified(modified + 1)
            })
            .catch((err) => {
                console.log({ err });
            });
    }


    return (
        <div className="localIssuesList">
            <h1>Local Issues</h1>
            {allIssues.map(e => {
                // console.log({e})
                return (
                    <DivCard key={e.id}>
                        <H2Card>{e.short_description}</H2Card>
                        <p>{e.description}</p>
                        <p>Zip Code: {e.zip_code}</p>
                        <p>Points: {e.upvotes}</p>
                        <NewButton onClick={() => upvote(e)}>Upvote</NewButton>
                        <NewButton onClick={() => downvote(e)}>Downvote</NewButton>
                    </DivCard>
                )
            })}
        </div>
    );
}

export default Issues;
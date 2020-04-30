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
        console.log(issue)
        let value = {value: 1};
        console.log(value)

        axiosWithAuth()
            .put(`/issues/${issue.id}`, value)
            .then((res) => {
                console.log({ res });
                setModified(modified + 1)
            })
            .catch((err) => {
                console.log({ err });
            });
    }

    const downvote = issue => {
        console.log(issue)
        let value = { value: 1 };
        console.log(value)

        axiosWithAuth()
            .put(`/issues/${issue.id}`, value)
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
                        <button onClick={() => upvote(e)}>Upvote</button>
                        <button onClick={() => upvote(e)}>Downvote</button>
                    </DivCard>
                )
            })}
        </div>
    );
}

export default Issues;
import React from 'react';
import { connect } from "react-redux";


import { deleteMyIssue } from "../store/actions";

const MyIssuesCard = props => {
    console.log({ props })

    const deleteIssue = () => {
        props.deleteMyIssue(props.issue.id)
    }

    return (
        <div className="myIssuesCard">
            <h3>{`${props.issue.short_description}`}</h3>
            <ul>
                <li>{`${props.issue.description}`}</li>
                <li>{`Score: ${props.issue.upvotes}`}</li>
                <li><button className="deleteButton" onClick={deleteIssue}>X</button></li>
            </ul>

        </div>
    )


}
export default connect(null, { deleteMyIssue })(MyIssuesCard); 
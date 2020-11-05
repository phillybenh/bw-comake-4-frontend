import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


import { deleteMyIssue, getEditMyIssue } from "../store/actions";

const MyIssuesCard = props => {
    const { push } = useHistory();

    const deleteIssue = () => {
        props.deleteMyIssue(props.issue.id);
        props.setModified(!props.modified);
    }
    const editMyIssue = () => {
        push(`/editIssue/${props.issue.id}`);
    }

    return (
        <div className="myIssuesCard">
            <h3>{`${props.issue.short_description}`}</h3>
            <ul>
                <li>{`Description: ${props.issue.description}`}</li>
                <li>{`Score: ${props.issue.upvotes}`}</li>
            </ul>
            <div className="btnRow">
                <button className="deleteButton" onClick={deleteIssue}>Delete Issue</button>
                <button className="button editButton" onClick={editMyIssue}>Edit Issue</button>
            </div>

        </div>
    )
}
export default connect(null, { deleteMyIssue, getEditMyIssue })(MyIssuesCard); 
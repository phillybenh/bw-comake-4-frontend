import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


import { deleteMyIssue } from "../store/actions";

const MyIssuesCard = props => {
    // console.log({ props })
      const { push } = useHistory();


    const deleteIssue = () => {
        props.deleteMyIssue(props.issue.id); 
        props.setModified(props.modified + 1);
    }
    const editMyIssue = () => {
        push(`/editIssue/${props.issue.id}`);
    }

    return (
        <div className="myIssuesCard">
            <h3>{`${props.issue.short_description}`}</h3>
            <ul>
                <li>{`${props.issue.description}`}</li>
                <li>{`Score: ${props.issue.upvotes}`}</li>
            </ul>
            <button className="deleteButton" onClick={deleteIssue}>Delete Issue</button>
            <button className="button editButton" onClick={editMyIssue}>Edit Issue</button>

        </div>
    )


}
export default connect(null, { deleteMyIssue })(MyIssuesCard); 
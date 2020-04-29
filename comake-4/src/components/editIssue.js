import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory, useParams } from "react-router-dom";

import { editMyIssue, getEditMyIssue } from "../store/actions";

const EditIssue = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  // using 'modified' to force the useEffect to fire when I want it to
  const initMod = 1;
  const [modified, setModified] = useState(initMod);
  useEffect(() => {
    props.getEditMyIssue(id);
  }, [modified]);

    const initialState = {
      description: props.description,
      id: props.id,
      short_description: props.short_description,
      upvotes: props.upvotes,
      user_id: props.user_id,
      zip_code: props.zip_code,
    };
  
  const [issue, setIssue] = useState(initialState);


  const handleChange = (e) => {
    e.persist();
    setIssue({
      ...issue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editMyIssue(issue);
    setModified(modified + 1);
  };

  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/myIssues")}>Back to My Issues</button>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>

      <h2>Edit Your Issue</h2>
      {props.isFetching && (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      )}
      <div className="editIssueContainer">
        <form onSubmit={handleSubmit}>
          <input
            label="Title:"
            type="text"
            name="short_description}"
            placeholder={props.issue.short_description}
            value={issue.short_description}
            onChange={handleChange}
          />
          <br />
          <textarea
            label="Description:"
            type="text"
            name="description"
            placeholder={props.issue.description}
            value={issue.description}
            onChange={handleChange}
          />
          <button>Update Issue</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.editIssue);
  return {
    isFetching: state.editIssue.false,
    error: state.editIssue.error,
    issue: state.editIssue.issue,
    description: state.editIssue.issue.description,
    id: state.editIssue.issue.id,
    short_description: state.editIssue.issue.short_description,
    upvotes: state.editIssue.issue.upvotes,
    user_id: state.editIssue.issue.user_id,
    zip_code: state.editIssue.issue.zip_code,
  };
};

export default connect(mapStateToProps, { editMyIssue, getEditMyIssue })(
  EditIssue
);

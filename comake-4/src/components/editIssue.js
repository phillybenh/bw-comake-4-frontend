import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory, useParams } from "react-router-dom";

import { editMyIssue, getEditMyIssue } from "../store/actions";

const EditIssue = (props) => {
  console.log({ props });
  const { push } = useHistory();
  const { id } = useParams();

  const initialState = {};
  const [editIssue, setEditIssue] = useState(initialState);

  useEffect(() => {
    props.getEditMyIssue(id);
    setEditIssue({
      description: props.description,
      id: props.id,
      short_description: props.short_description,
      upvotes: props.upvotes,
      user_id: props.user_id,
      zip_code: props.zip_code,
    });
  }, [props]);

  const handleChange = (e) => {
    e.persist();
    setEditIssue({
      ...editIssue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editMyIssue(editIssue);
    push("/myIssues");
  };

  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/myIssues")}>Back to My Issues</button>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>
      <div className="editIssuesContainer">
        <h2>Edit Your Issue</h2>
        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        <form onSubmit={handleSubmit}>
          <label>Title
          <input
            id="title:"
            type="text"
            name="short_description"
            placeholder="Issue Title"
            value={editIssue.short_description}
            onChange={handleChange}
          />
          </label>
          <label>Description
          <textarea
            id="description:"
            type="text"
            name="description"
            placeholder="Issue Description"
            value={editIssue.description}
            onChange={handleChange}
          />
          </label>
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

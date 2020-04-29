import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import MyIssuesCard from "./myIssuesCard";
import { getMyIssues } from "../store/actions";

const MyIssues = (props) => {
  const { push } = useHistory();
  const initialState = 1;
  const [modified, setModified] = useState(initialState);

    useEffect(() => {
        props.getMyIssues();
    }, [modified]);

    console.log({props})
  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/userProfile")}>User Profile</button>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>
      <h2> My Issues</h2>
      {props.isFetching && (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      )}
      <div className="myIssuesContainer">
        {props.myIssues.errorMessage ? (
          <p>You have no open issues</p>
        ) : (
          props.myIssues.map((issue) => {
            console.log({ issue });
            return <MyIssuesCard issue={issue} modified={modified} setModified={setModified} />;
          })
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  //   console.log(state.user);
  return {
    isFetching: state.issues.false,
    error: state.issues.error,
    myIssues: state.issues.myIssues,
  };
};

export default connect(mapStateToProps, { getMyIssues })(
  MyIssues
);

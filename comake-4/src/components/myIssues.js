import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import MyIssuesCard from "./myIssuesCard";
import { getMyIssues } from "../store/actions";

const MyIssues = (props) => {
  const { push } = useHistory();
  const [modified, setModified] = useState(false);

  useEffect(() => {
    props.getMyIssues();
  }, [modified]);

  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/userProfile")}>User Profile</button>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>
      <div className="myIssuesContainer">
        <h2>My Issues</h2>
        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
          {props.error ? (
            <p>You have no open issues</p>
          ) : (
              props.myIssues.map((issue) => {
                return <MyIssuesCard issue={issue} modified={modified} setModified={setModified} />;
              })
            )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isFetching: state.issues.false,
    error: state.issues.error,
    myIssues: state.issues.myIssues,
  };
};

export default connect(mapStateToProps, { getMyIssues })(
  MyIssues
);

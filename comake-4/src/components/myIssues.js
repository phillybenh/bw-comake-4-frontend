import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import MyIssuesCard from "./myIssuesCard";
import { getMyIssues } from "../store/actions";

const MyIssues = (props) => {
  const { push } = useHistory();

    useEffect(() => {
        props.getMyIssues();
    }, []);

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
      <div className="myIssuesContainer">
          {props.myIssues.errorMessage && <p>You have no open issues</p> || 
         props.myIssues.map((issue) => {
          console.log({ issue });
          return <MyIssuesCard issue={issue} />;
        })} 
        
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  //   console.log(state.user);
  return {
    // username: state.issues.username,
    // first_name: state.issues.first_name,
    // last_name: state.issues.last_name,
    // zip_code: state.issues.zip_code,
    // bio: state.issues.bio,
    // id: state.issues.id,
    isFetching: state.issues.false,
    error: state.issues.error,
    myIssues: state.issues.myIssues,
  };
};

export default connect(mapStateToProps, { getMyIssues })(
  MyIssues
);

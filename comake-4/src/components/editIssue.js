import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";


const EditIssue = (props) => {
  const { push } = useHistory();
  
  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/userProfile")}>User Profile</button>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>
      <h2> Edit Issues</h2>
      {/* {props.isFetching && (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      )} */}
      <div className="editIssueContainer">
            return (
              <>
              <p>Edit Form goes here</p>
              </>
            );
          })
        )}
      </div>
    </>
  );
};


export default EditIssue;

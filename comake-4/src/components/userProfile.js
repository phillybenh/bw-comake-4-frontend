import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import { getProfile, updateProfile } from "../store/actions";

const UserProfile = (props) => {
  const { push } = useHistory();

  useEffect(() => {
    props.getProfile(localStorage.getItem("userID"));
  }, []);

  const initialState = {
    username: props.username,
    first_name: props.first_name,
    last_name: props.last_name,
    zip_code: props.zip_code,
    bio: props.bio,
    id: props.id,
  };

  const [userInfo, setUserInfo] = useState(initialState);

  const handleChange = (e) => {
    e.persist();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateProfile(userInfo);
  };

  const logout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    window.location.reload(false);
  };

  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/main")}>Main</button>
        </nav>
      </header>
      <div className="profileContainer">
        <h2>{`${props.username}'s Profile`}</h2>

        {props.isFetching && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}

        <form onSubmit={handleSubmit}>
          <div className="leftDiv">
            <label>First Name
            <input
                id="firstName"
                type="text"
                name="first_name"
                placeholder={(props.first_name !== null) ? ((props.first_name !== "") ? props.first_name : "First Name") : "First Name"}
                value={userInfo.first_name}
                onChange={handleChange}
              />
            </label>
            <label>Last Name

            <input
                id="lastName"
                type="text"
                name="last_name"
                placeholder={(props.last_name !== null) ? ((props.last_name !== "") ? props.last_name : "Last Name") : "Last Name"}
                value={userInfo.last_name}
                onChange={handleChange}
              />
            </label>
            <label>Zip Code
            <input
                id="zipCode"
                type="text"
                pattern="(\d{5}?)"
                name="zip_code"
                placeholder={(props.zip_code !== null) ? ((props.zip_code !== "") ? props.zip_code : "Zip Code") : "Zip Code"}
                value={userInfo.zip_code}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="rightDiv">
            <label for="bio">Bio</label>
            <textarea
              id="bio"
              type="text"
              name="bio"
              placeholder={(props.bio !== null) ? ((props.bio !== "") ? props.bio : "Tell us a little about yourself.") : "Tell us a little about yourself."}
              value={userInfo.bio}
              onChange={handleChange}
            />
            <button>Update</button>
          </div>
        </form>
      </div>
      <div className="btnRow">
        <button onClick={() => push("/myIssues")}>My Open Issues</button>
        <button className="logoutButton" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    zip_code: state.user.zip_code,
    bio: state.user.bio,
    id: state.user.id,
    isFetching: false,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { getProfile, updateProfile })(
  UserProfile
);

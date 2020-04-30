import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import { getProfile, updateProfile } from "../store/actions";
import styled from 'styled-components';

const NewButton = styled.button `
  cursor: pointer;
  background-color: #8A2BE2;
  width: 180px;
  color: #fff;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  
`
const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`

const UserProfile = (props) => {
  //   console.log(props);
  const { push } = useHistory();
  const initMod = 1;
  const [modified, setModified] = useState(initMod);

  useEffect(() => {
    props.getProfile(localStorage.getItem("userID"));
  }, [modified]);

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
    setModified(modified + 1);
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
          <NewButton onClick={() => push("/main")}>Main</NewButton>
        </nav>
      </header>
      <div className='styling'>
      <h2 className='profileH2'>{`${props.username}'s Profile`}</h2>

      {props.isFetching && (
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      )}
      <div className="userData">
        <ul>
          <li>First Name: {props.first_name}</li>
          <li>Last Name: {props.last_name}</li>
          <li>Zip Code: {props.zip_code}</li>
          <li>Bio: {props.bio}</li>
        </ul>
      </div>
      <div className="updateForm">
        <NewForm onSubmit={handleSubmit}>
          {/* <input
          label="Username"
          type="text"
          name="Username"
          placeholder="username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <br /> */}
          <input
            label="First Name"
            type="text"
            name="first_name"
            placeholder="First Name"
            value={userInfo.first_name}
            onChange={handleChange}
          />
          <input
            label="Last Name"
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={userInfo.last_name}
            onChange={handleChange}
          />
          <input
            label="Zip Code"
            type="text"
            pattern="(\d{5}?)"
            // pattern="(\d{5}([\-]\d{4})?)"
            name="zip_code"
            placeholder="Zip Code"
            value={userInfo.zip_code}
            onChange={handleChange}
          />
          <textarea
            label="Bio"
            type="text"
            name="bio"
            placeholder="Tell us a little about yourself."
            value={userInfo.bio}
            onChange={handleChange}
          />
          <NewButton>Update</NewButton>
        </NewForm>
      <div className="otherButton">
        <NewButton onClick={() => push("/myIssues")}>Go to my open issues!</NewButton>
        <NewButton className="logoutButton" onClick={logout}>
          Logout
        </NewButton>
        </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state.user);
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

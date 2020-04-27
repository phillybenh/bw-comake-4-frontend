import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

import { getProfile, updateProfile } from "../store/actions"


const UserProfile = props => {

    useEffect(() => {
        getProfile()
    }, [])

    const initialState = {
        username: props.username,
        firstName: props.firstName,
        lastName: props.lastName,
        zip: props.zip,
        bio: props.bio,
        isFetching: props.isFetching,
        error: props.error,
    }

    const [userInfo, setUserInfo] = useState(initialState)

    const handleChange = e => {
        e.persist();
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.updateProfile(userInfo);
    }

return(
    <>
    <h2>User Profile</h2>
        {props.isFetching && (
            <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        <form>
            <input
                label="Username"
                type="text"
                name="username"
                placeholder="username"
                value={userInfo.username}
                onChange={handleChange}
            />
            <br />
            <input
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleChange}
            />
            <input
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={handleChange}
            />
            <input
                label="Zip Code"
                type="number"
                name="zip"
                placeholder="Zip Code"
                value={userInfo.zip}
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
            <button>Login</button>
        </form>
    </>
)

}

const mapStateToProps = (state) => {
    // console.log(state.user);
    return {
        username: state.user.username,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        zip: state.user.zip,
        bio: state.user.bio,
        isFetching: false,
        error: state.user.error,
    };
};

export default connect(mapStateToProps, { getProfile, updateProfile })(UserProfile);
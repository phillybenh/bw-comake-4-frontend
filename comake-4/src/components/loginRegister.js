import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { loginAction, registerAction } from "../store/actions"
const initialState = {
    username: "",
    password: ""
}

const Login = props => {

    const [login, setLogin] = useState(initialState)
    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    // const userLogin = (event) => {
    //     event.preventDefault();
    //     props.loginAction(login);
    // };
    // const userRegister = (event) => {
    //     event.preventDefault();
    //     props.registerAction(login);
    // };


    return (
        <>
            {props.isFetching && (
                <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            )} 
        <h3> Login or Register</h3>
            <form>
                <input
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={login.username}
                    onChange={handleChange}
                />
                <br />
                <input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={login.password}
                    onChange={handleChange}
                />
                
                <button onClick={props.loginAction(login)}>Login</button>
                <button onClick={props.registerAction(login)}>Register</button>
            </form>
        </>

    )
}

const mapStateToProps = (state) => {
    console.log(state.user);
    return {
        isFetching: state.user.isFetching,
        error: state.user.error,
    };
};

export default connect(mapStateToProps, {loginAction, registerAction})(Login);
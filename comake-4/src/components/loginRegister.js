import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { loginAction, registerAction } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const { push } = useHistory();
  const [login, setLogin] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", login)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userID", res.data.user.id);
        console.log({ res });
        props.loginAction(res);
        push("/main");
      })
      .catch((err) => {
        console.log(err);
        alert("Please enter a valid username and password, or register a new account.")
      });
  };
  const userRegister = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/register", login)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userID", res.data.user.id);

        console.log({ res });
        props.registerAction(res);
        push("/userProfile");
      })
      .catch((err) => {
        console.log(err);
        alert("There was an error. Please try again.")
      });
  };

  return (
    <div className="loginContainer">
      <h2>Please log in or register new account.</h2>
      <form>
        <input
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleChange}
        />
        <br />
        <input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleChange}
        />
        <div className="btnRow">
        <button onClick={userLogin}>Login</button>
        <button onClick={userRegister}>Register</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    username: state.user.username,
    isFetching: state.user.isFetching,
    error: state.user.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { loginAction, registerAction })(Login)
);

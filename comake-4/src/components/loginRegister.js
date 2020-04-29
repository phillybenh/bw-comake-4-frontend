import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { useHistory, withRouter } from "react-router-dom";

import { loginAction, registerAction } from "../store/actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  // console.log({ props })
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
    // props.loginAction(login)
    axiosWithAuth()
      .post("/login", login)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userID", res.data.user.id);
        console.log({ res });
        props.loginAction(res);
        // temporary...
        push("/userProfile");
        // push('/main');
      })
      .catch((err) => {
        props.loginAction(err);
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
        props.registerAction(err);

        // console.log({err})
      });
  };

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

        <button onClick={userLogin}>Login</button>
        <button onClick={userRegister}>Register</button>
      </form>
    </>
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

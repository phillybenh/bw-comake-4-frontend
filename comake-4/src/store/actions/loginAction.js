import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";


export const loginAction = userLogin => {

return dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axiosWithAuth()
    .post('/login', userLogin)
    .then(res => {
        console.log({res})
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })
        localStorage.setItem("token", res.data.payload)
        // userLogin.history.push("/main");
    })
    .catch (err => {
        // console.log({err})
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: `${err}`
        })
    })
}



}
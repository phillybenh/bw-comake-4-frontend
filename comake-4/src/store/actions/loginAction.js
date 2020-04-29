import { axiosWithAuth } from '../../utils/axiosWithAuth';
import history from "../../utils/history"


export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";


export const loginAction = res => {

    // console.log({ userLogin })

    return dispatch => {
        dispatch({ type: LOGIN_USER_START })
        dispatch({
            type: LOGIN_USER_SUCCESS,
            token: res.data.token,
            user: res.data.user,
        })
        dispatch({
                type: LOGIN_USER_FAIL,
                payload: `${res}`
            })
        // axiosWithAuth()
        // .post('/login', userLogin,)
        // .then(res => {
        //     localStorage.setItem("token", JSON.stringify(res.data.token))
        //     localStorage.setItem("userID", res.data.user.id)
        //     console.log({res})
        //     dispatch({
        //         type: LOGIN_USER_SUCCESS,
        //         token: res.data.token,
        //         user: res.data.user,
        //     })
        //     history.push("/userProfile")
        // })
        // .catch (err => {
        //     // console.log({err})
        //     dispatch({
        //         type: LOGIN_USER_FAIL,
        //         payload: `${err}`
        //     })
        // })
    }


}
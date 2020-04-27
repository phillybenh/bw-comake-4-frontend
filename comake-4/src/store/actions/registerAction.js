import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";


export const registerAction = newUser => {

    return dispatch => {
        dispatch({ type: REGISTER_USER_START })
        axiosWithAuth
            .post('/login', newUser)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: res.data
                })
                localStorage.setItem("token", res.data.payload)
                newUser.history.push("/profile");
            })
            .catch(err => {
                // console.log({err})
                dispatch({
                    type: REGISTER_USER_FAIL,
                    payload: `${err}`
                })
            })
    }



}
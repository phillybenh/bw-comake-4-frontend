import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_START = "GET_PROFILE_START";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL";


export const getProfile = props => {

    return dispatch => {
        dispatch({ type: GET_PROFILE_START })
        axiosWithAuth()
            .get(`/user/${props.username}`)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: res.data,
                    // may need depending on what API returns
                    // usernamePayload: newUser.username,
                })
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => {
                // console.log({err})
                dispatch({
                    type: GET_PROFILE_FAIL,
                    payload: `${err}`
                })
            })
    }

}

export const updateProfile = props => {

    return dispatch => {
        dispatch({ type: UPDATE_PROFILE_START })
        axiosWithAuth()
            .post(`/user/${props.username}`, props)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: res.data,
                    // may need depending on what API returns
                    // usernamePayload: newUser.username,
                })
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => {
                // console.log({err})
                dispatch({
                    type: UPDATE_PROFILE_FAIL,
                    payload: `${err}`
                })
            })
    }



}
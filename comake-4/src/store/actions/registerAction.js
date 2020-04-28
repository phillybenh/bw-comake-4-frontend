import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";


export const registerAction = newUser => {

    console.log({ newUser })


    return dispatch => {
        dispatch({ type: REGISTER_USER_START })
        axiosWithAuth()
            .post('/register', newUser,)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: res.data,
                    newUser: newUser.username
                })
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
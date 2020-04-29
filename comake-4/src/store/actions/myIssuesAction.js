import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ISSUES_START = "GET_ISSUES_START";
export const GET_ISSUES_FAIL = "GET_ISSUES_FAIL";
export const GET_ISSUES_SUCCESS = "GET_ISSUES_SUCCESS";
export const DELETE_ISSUES_START = "DELETE_ISSUES_START";
export const DELETE_ISSUES_FAIL = "DELETE_ISSUES_FAIL";
export const DELETE_ISSUES_SUCCESS = "DELETE_ISSUES_SUCCESS";



export const getMyIssues = props => {
    // console.log({ props })
    return dispatch => {
        dispatch({ type: GET_ISSUES_START })
        axiosWithAuth()
        //- GET 
            .get(`/issues?user_id=${localStorage.getItem("userID")}`)
            // .get('/issues')
            .then(res => {
                console.log({ res })
                dispatch({
                    type: GET_ISSUES_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log({err})
                dispatch({
                    type: GET_ISSUES_FAIL,
                    payload: `${err}`
                })
            })
    }

}


export const deleteMyIssue = props => {
    console.log({ props })
    return dispatch => {
        dispatch({ type: DELETE_ISSUES_START })
        axiosWithAuth()
            .delete(`/issues/${props}`)
            .then(res => {
                console.log({ res })
                dispatch({
                    type: DELETE_ISSUES_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log({ err })
                dispatch({
                    type: DELETE_ISSUES_FAIL,
                    payload: `${err}`
                })
            })
    }

}



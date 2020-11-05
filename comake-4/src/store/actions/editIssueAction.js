import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const EDIT_ISSUES_START = "EDIT_ISSUES_START";
export const EDIT_ISSUES_FAIL = "EDIT_ISSUES_FAIL";
export const EDIT_ISSUES_SUCCESS = "EDIT_ISSUES_SUCCESS";
export const GET_EDIT_ISSUES_START = "GET_EDIT_ISSUES_START";
export const GET_EDIT_ISSUES_FAIL = "GET_EDIT_ISSUES_FAIL";
export const GET_EDIT_ISSUES_SUCCESS = "GET_EDIT_ISSUES_SUCCESS";


export const editMyIssue = props => {
    return dispatch => {
        dispatch({ type: EDIT_ISSUES_START })
        axiosWithAuth()
            .put(`/issues/${props.id}`, props)
            .then(res => {
                console.log("edit res", { res })
                dispatch({
                    type: EDIT_ISSUES_SUCCESS,
                    payload: res.data, 
                })
            })
            .catch(err => {
                console.log({ err })
                dispatch({
                    type: EDIT_ISSUES_FAIL,
                    payload: `${err}`
                })
            })
    }

}
export const getEditMyIssue = props => {
    return dispatch => {
        dispatch({ type: GET_EDIT_ISSUES_START })
        axiosWithAuth()
            .get(`/issues/${props}`)
            .then(res => {
                dispatch({
                    type: GET_EDIT_ISSUES_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log({ err })
                dispatch({
                    type: GET_EDIT_ISSUES_FAIL,
                    payload: `${err}`
                })
            })
    }

}



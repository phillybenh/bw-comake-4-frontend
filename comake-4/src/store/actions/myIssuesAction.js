import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const GET_ISSUES_START = "GET_ISSUES_START";
export const GET_ISSUES_FAIL = "GET_ISSUES_FAIL";
export const GET_ISSUES_SUCCESS = "GET_ISSUES_SUCCESS";



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


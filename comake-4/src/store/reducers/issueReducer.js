import {
    GET_ISSUES_START,
    GET_ISSUES_FAIL,
    GET_ISSUES_SUCCESS,
    DELETE_ISSUES_START,
    DELETE_ISSUES_FAIL,
    DELETE_ISSUES_SUCCESS,
} from "../actions"

export const initialState = {
   
    isFetching: false,
    error: "",
    myIssues: [{
        description: "",
        id: "",
        short_description: "",
        upvotes: "",
        user_id: "",
        zip_code: "",
    }],
}

export const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                myIssues: action.payload,
                isFetching: false
            };
        case DELETE_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case DELETE_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case DELETE_ISSUES_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

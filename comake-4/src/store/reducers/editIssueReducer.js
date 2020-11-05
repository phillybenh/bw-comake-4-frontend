import {
    EDIT_ISSUES_START,
    EDIT_ISSUES_FAIL,
    EDIT_ISSUES_SUCCESS,
    GET_EDIT_ISSUES_START,
    GET_EDIT_ISSUES_FAIL,
    GET_EDIT_ISSUES_SUCCESS,
} from "../actions"

export const initialState = {
    isFetching: false,
    error: "",
    issue: {
        description: "",
        id: "",
        short_description: "",
        upvotes: "",
        user_id: "",
        zip_code: "",
    },
}

export const editIssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case EDIT_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case EDIT_ISSUES_SUCCESS:
            return {
                ...state,
                issue: {
                    description: "",
                    id: "",
                    short_description: "",
                    upvotes: "",
                    user_id: "",
                    zip_code: "",
                },
                isFetching: false,
                error: "",
            };
        case GET_EDIT_ISSUES_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_EDIT_ISSUES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case GET_EDIT_ISSUES_SUCCESS:
            return {
                ...state,
                issue: action.payload.pop(),
                isFetching: false
            };
        default:
            return state;
    }
}
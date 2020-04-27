import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_START,
    GET_PROFILE_FAIL,
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
} from "../actions";


export const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    zip: "",
    bio: "",
    isFetching: false,
    error: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                zip: action.payload.zip,
                bio: action.payload.bio,
                isFetching: false,
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case REGISTER_USER_START:
            return {
                ...state,
                isFetching: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                isFetching: false,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
                zip: action.payload.zip,
                bio: action.payload.bio,
                isFetching: false,
            };
        case GET_PROFILE_START:
            return {
                ...state,
                isFetching: true
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case UPDATE_PROFILE_START:
            return {
                ...state,
                isFetching: true
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}
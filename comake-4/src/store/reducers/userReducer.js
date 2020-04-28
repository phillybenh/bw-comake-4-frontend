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
    first_name: "",
    last_name: "",
    zip_code: "",
    bio: "",
    id: "",
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
            localStorage.setItem("token", JSON.stringify(action.token))
            localStorage.setItem("userID", action.user.id)
            // console.log(action.payload.token)
            return {
                ...state,
                username: action.user.username,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                zip_code: action.user.zip_code,
                bio: action.user.bio,
                id: action.user.id,
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
            localStorage.setItem("token", JSON.stringify(action.token))

            return {
                ...state,
                // username: action.user.username,
                // id: action.user.id,
                isFetching: false,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case GET_PROFILE_SUCCESS:
            localStorage.setItem("userID", action.payload.id)

            return {
                ...state,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                zip_code: action.payload.zip_code,
                id: action.payload.id,
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
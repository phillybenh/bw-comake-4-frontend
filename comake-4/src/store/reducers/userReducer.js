import {
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
} from "../actions";


export const initialState = {
    username: "",
    first_name: "",
    last_name: "",
    zip: "",
    isFetching: false,
    error: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        

        default:
            return state;
    }
}
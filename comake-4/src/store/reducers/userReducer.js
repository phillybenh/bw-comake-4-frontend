// import {
//     ACTION_TYPES
// } from "../actions";


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
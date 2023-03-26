import { LOGIN_FAILURE, LOGIN_REQUEST } from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

// Get the token from the cookie
const token = document.cookie.split(';').find(c => c.trim().startsWith('token='));

if (token) {
    INITIAL_STATE.token = token.split('=')[1];
}

export const userSigninReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        case LOGIN_REQUEST: {
            
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case LOGIN_SUCCESS:{
            
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                loading: false,
                error: null
            };
        }

        case LOGIN_FAILURE: {
            
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case LOGOUT: {
            
            return {
                ...state,
                email: null,
                password: null,
                token: null
            };
        }

        default: 
            return state;
    }

}
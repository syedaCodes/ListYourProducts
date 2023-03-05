import GET_MEALS from "../actions/types";

const INITIAL_STATE = {
    meals: []
}

const mealsReducer = (state = INITIAL_STATE, action) => {
    
    const  { type, payload } = action;

    switch(type) {

        case GET_MEALS:
            return {
                ...payload.value
            }
        
        default:
            return state;
    }
}

export default mealsReducer;
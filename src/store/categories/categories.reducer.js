import { CATEGORY_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
    categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            };

        // case CATEGORY_ACTION_TYPES.GET_CATEGORIES_MAP:
        //     return {
        //         ...state,
        //         categoriesMap: payload,
        //     };
        default:
            return state;
    }
};

import { CATEGORY_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: {},
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
            };

        case CATEGORY_ACTION_TYPES.SET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false,
            };

        case CATEGORY_ACTION_TYPES.SET_CATEGORIES_FAILED:
            return {
                ...state,
                categories: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

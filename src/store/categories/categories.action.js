import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./categories.types";

export const fetchGetCatgoriesStart = () =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_START);

export const fetchGetCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArray);

export const fetchGetCategoriesFailed = (error) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchGetCatgoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(fetchGetCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchGetCategoriesFailed(error));
    }
};

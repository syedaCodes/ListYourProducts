import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categoriesMap) =>
    createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const getCategoriesMap = (categoriesMap) =>
    createAction(CATEGORY_ACTION_TYPES.GET_CATEGORIES_MAP, categoriesMap);

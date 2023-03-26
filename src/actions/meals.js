import mealsService from "../services/meals.service";
import { GET_MEALS } from "./types";

export const getMeals = () => (dispatch) => {
    return mealsService.getMeals().then(
        (response) => {

            let meals = response.data;

           dispatch({
            type: GET_MEALS,
            payload: { value: meals }
           });

           return Promise.resolve();
        },
        (error) => {
            console.log(error);
            return Promise.reject();
        }
    )
}
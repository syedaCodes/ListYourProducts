import axios from "axios";

const API_MEALS =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=spaghetti";

const getMeals = () => {
  const res = axios.get(API_MEALS);
  return res;
};

export default {
  getMeals,
};
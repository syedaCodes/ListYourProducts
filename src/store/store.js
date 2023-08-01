import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares)); //enhance our store

//action -> middleware runs before action hits -> reducers
export const store = createStore(rootReducer, undefined, composedEnhancers); //undefined for an optional parameter - additional default state for testing made easy

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//Synchronous logger for debugging
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
};

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

// const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares)); //enhance our store

//action -> middleware runs before action hits -> reducers
export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
); //undefined for an optional parameter - additional default state for testing made easy

export const persistor = persistStore(store);

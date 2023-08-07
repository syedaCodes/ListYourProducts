import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    // blacklist: ["user"],
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    thunk,
].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== "production" &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); //enhance our store

//action -> middleware runs before action hits -> reducers
export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
); //undefined for an optional parameter - additional default state for testing made easy

export const persistor = persistStore(store);

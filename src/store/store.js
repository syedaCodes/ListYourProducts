import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [
    import.meta.env.VITE_APP_ENVIRONMENT === "development" && logger,
].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleWares,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }).concat(middleWares),
});

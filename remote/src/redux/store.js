import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApiSlice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            usersApi.middleware,
        ),
    devTools: true,
});
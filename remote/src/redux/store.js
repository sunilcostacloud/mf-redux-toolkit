import { configureStore } from "@reduxjs/toolkit";
import { petsApiSlice } from "./api/petsApiSlice";

export const store = configureStore({
    reducer: {
        [petsApiSlice.reducerPath]: petsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            petsApiSlice.middleware,
        ),
    devTools: true,
});
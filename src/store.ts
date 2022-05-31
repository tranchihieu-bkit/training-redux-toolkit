import {configureStore} from '@reduxjs/toolkit'
import imageSlice from "./reduxs/imageSlice";

export const store = configureStore({
    reducer: {
        image: imageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
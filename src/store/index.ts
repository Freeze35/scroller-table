import {configureStore} from "@reduxjs/toolkit";
import storeSlice from "./reducers/storeSlice"

const store =  configureStore({
    reducer:{
        storeSlice: storeSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
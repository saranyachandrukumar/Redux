import { configureStore } from "@reduxjs/toolkit";
import customerReducer  from './slice/customerslice';

export const store = configureStore({
    devTools:true,
    reducer: {
        customers: customerReducer
    }
})
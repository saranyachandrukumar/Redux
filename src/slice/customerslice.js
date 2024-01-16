
import { createSlice } from "@reduxjs/toolkit";

const initialState  = [];     // this is empty because this only need to going to show in customerview 

const customerSlice = createSlice({
    name: 'customer',                // whatever name we want we can give
    initialState,
    reducers: {             // This reducers will do the changes in the store components reducers

        adddddCustomer(state, action) {
            state.push(action.payload)   // we are sending data through action to the payload
        },
        deletecustomer(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex )
        }
    }

})

export const { adddddCustomer, deletecustomer } = customerSlice.actions;
export default customerSlice.reducer




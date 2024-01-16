import React, { useState } from "react";
import { adddddCustomer } from '../slice/customerslice'
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);


    function addCustomer() {
        if (input) {
            // setCustomers((previousState) => [...previousState, input] ) // when we click add button that what data inside the box is pushed to customers
            dispatch(adddddCustomer(input))
            setInput("");   //clear the data inside the textbox and value={input} is that in that view point also data clearing in textbox
        }
    }
// what data typing in the textbox that data access through e.target.value in setinput
    return <> 
        <div>
            <h3>Add New Customer</h3>
            
            <input type="text" value={input} onChange={(e) => setInput(e.target.value) } /> 
            <button onClick={addCustomer}>Add</button>
        </div>
    </>
        
        
}
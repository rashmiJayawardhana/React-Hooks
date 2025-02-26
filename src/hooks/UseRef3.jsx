import { useRef } from "react";
import "../App.css";

function UseRef3() {   
    const inputRef = useRef(null); // Creating a reference for the input field

    const handleClick = () => {
        const inputValue = inputRef.current.value.trim(); // Get the trimmed value

        if (inputValue === "") {
            inputRef.current.focus(); // Focus the input field if it's empty
        } else if (Number(inputValue) > 50) {
            alert("Success ✅");
        } else {
            alert("Error ❌ (Value must be greater than 50)");
        }
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <input ref={inputRef} type="text" placeholder="Enter a number..." />
            <button onClick={handleClick}>Validate</button>
        </div>
    );
}

export default UseRef3;

{/*
Used for validating input and conditionally displaying alerts.
How useRef is used? Retrieves inputRef.current.value to check if it's empty or greater than 50.
No visual UI change apart from alerts.
No state change, only interacts with useRef.
useRef is used to reference a DOM element (input field) without causing re-renders.
Accessing inputRef.current.value directly reads the input field’s value.
focus() is applied when the input is empty, guiding the user to enter a value.
Handles validation correctly by converting the value to a number before comparison.
*/}
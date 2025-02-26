import { useRef } from "react";
import '../App.css';

function UseRef2() {
    // Creating a reference using useRef for the input field
    const inputRef = useRef(null);

    // Function to focus the input field when button is clicked and change its background color
    const handleFocus = () => {
        if (inputRef.current) { // Ensure ref exists before accessing properties
            inputRef.current.focus(); // Focus the input field, Accessing the DOM element using useRef
            inputRef.current.style.backgroundColor = "lightyellow"; // Change background color
        }
    };

    return (
        <div>
            <h2>useRef Example</h2>
            {/* Assigning the ref to the input field */}
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default UseRef2;

{/*
Used to focus the input field and change its background color.
How useRef is used? Accesses inputRef.current to apply focus() and change style.backgroundColor.
Focuses the input and changes background color when the button is clicked.
No state change, but modifies the DOM directly.
useRef(null) creates a reference (inputRef) initialized as null.
The ref={inputRef} is assigned to the <input> element.
inputRef.current.focus() programmatically focuses the input field when the button is clicked.
inputRef.current.style.backgroundColor = "lightyellow" dynamically changes the input field's background color. 
The useRef hook is used to create a reference (inputRef) for the input field.
When the button is clicked, handleFocus():
    Checks if inputRef.current exists.
    Focuses on the input field (.focus()).
    Changes its background color to "lightyellow".
*/}

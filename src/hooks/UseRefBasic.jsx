import { useRef } from "react";

function UseRefBasic() {
    // Creating a reference using useRef
    const inputRef = useRef(null);

    // Function to focus the input field when button is clicked
    const handleFocus = () => {
        inputRef.current.focus(); // Accessing the DOM element using useRef
        inputRef.current.style.backgroundColor = "lightyellow"; // Changing background color
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

export default UseRefBasic;

{/*
useRef(null) creates a reference (inputRef) initialized as null.
The ref={inputRef} is assigned to the <input> element.
inputRef.current.focus() programmatically focuses the input field when the button is clicked.
inputRef.current.style.backgroundColor = "lightyellow" dynamically changes the input field's background color. 
*/}

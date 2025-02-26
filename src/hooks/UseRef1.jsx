import React, { useEffect, useRef, useState } from "react";
import '../App.css';

function App() {
    // State for input field
    const [input, setInput] = useState("");

    // useRef to track component renders
    const renderCount = useRef(1); 

    useEffect(() => {
        // Increment render count on each render
        renderCount.current = renderCount.current + 1;
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h2>Understanding useRef in React</h2>
            <input 
                type="text" 
                onChange={handleChange} 
                placeholder="Type something..." 
                value={input} 
            />
            <p>You have input: {input || "<Input text goes here>"}</p>
            <p>Component re-rendered: {renderCount.current} times</p>
        </div>
    );
}

export default App;

{/*
useRef is used to track the number of times the component has re-rendered without causing re-renders itself.
Unlike useState, changing useRef does not trigger a re-render.
useEffect runs on every render, increasing renderCount.current to keep track of re-renders.
*/}
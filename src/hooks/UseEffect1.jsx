import { useEffect, useState } from 'react'  // Importing useState and useEffect hooks from React
import '../App.css'  // Importing CSS for styling

function UseEffect1() {
    // Declaring state variables:
    const [count, setcount] = useState(0);    // 'count' for managing counter value, initialized to 0
    const [clicks, setclicks] = useState(0);  // 'clicks' for tracking button clicks, initialized to 0

    // Function to decrement the count value
    const decrementFunction = () => {
        setcount(count - 1);  // Decreasing count by 1
    };

    // Function to increment the count value
    const incrementFunction = () => {
        setcount(count + 1);  // Increasing count by 1
    };

    // useEffect hook: Updates the document title whenever 'count' changes
    useEffect(() => {
        document.title = `You clicked ${clicks} times`;  // Updates the browser tab title
    }, [count]);  // Runs only when 'count' changes

    return (
        <>
            <div id='wrapper'>
                <p>Counter</p>

                {/* Button to decrement the counter */}
                <button onClick={decrementFunction}>-</button>

                {/* Button to increment the counter */}
                <button onClick={incrementFunction}>+</button>

                {/* Displaying the current count value */}
                <p>{count}</p>

                {/* Displaying the click count */}
                <p>You clicked {clicks} times</p>

                {/* Button to increment the click counter */}
                <button onClick={() => setclicks(clicks + 1)}>
                    Click me
                </button>
            </div>
        </>
    );
}

export default UseEffect1;

{/*
What useEffect does:
Runs the provided function after every render if any dependency changes.
In this case, it updates the document title with the clicks count whenever count changes.

Dependency Array ([count]):
useEffect runs only when count changes.
If the dependency array was empty ([]), it would run only once after the initial render.
If omitted, it would run after every render, causing unnecessary updates. 

Component Behavior:
The counter buttons increase or decrease count, affecting the useEffect hook.
The Click me button increases clicks but does not trigger useEffect, because clicks is not in the dependency array.
*/}

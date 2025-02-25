import { useState } from 'react'  // Importing useState hook from React
import '../App.css'  // Importing CSS for styling

function UseState2() {
    // Declaring a state variable 'count' with an initial value of 0
    // 'setcount' is the function to update 'count'
    const [count, setcount] = useState(0)  

    // Function to decrement the count value
    const decrementFunction = () => {
        setcount(count - 1)  // Decreasing count by 1
    }

    // Function to increment the count value
    const incrementFunction = () => {
        setcount(count + 1)  // Increasing count by 1
    }

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
            </div>
        </>
    )
}

export default UseState2

{/* 
Using useState
useState(0) initializes count with 0, and setcount updates it.

Updating State on Click
Clicking the "-" button calls decrementFunction(), decreasing count by 1.
Clicking the "+" button calls incrementFunction(), increasing count by 1.

Component Re-rendering
When count changes, React automatically re-renders the component, updating the displayed number. 
*/}
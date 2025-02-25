import { useState } from 'react'  // Importing useState hook from React
import '../App.css'  // Importing CSS for styling

function UseState1() {
    // Declaring a state variable 'num' with an initial value of 2
    // 'setnum' is the function to update 'num'
    const [num, setnum] = useState(2)  

    // Function to handle button click and update state
    function handleClick(){
        setnum(3)  // Updating state with a new value (3)
    }

    return (
        <>
            <div id='wrapper'>
                {/* Button that triggers handleClick when clicked */}
                <button onClick={handleClick}>Click</button>

                {/* Displaying the current value of 'num' */}
                <p>{num}</p>
            </div>
        </>
    )
}

export default UseState1

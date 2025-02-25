import { useEffect, useState } from "react";

function UseEffect2() {
    // State to store fetched data
    const [data, setData] = useState([]);

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") // API URL
            .then(response => response.json())  // Convert response to JSON
            .then(data => setData(data))  // Update state with fetched data
            .catch(error => console.error("Error fetching data:", error)); // Handle errors
    }, []); // Empty dependency array ensures it runs only once when component mounts

    return (
        <div>
            <h2>Fetched Data</h2>
            <ul>
                {data.slice(0, 5).map(post => ( // Displaying only first 5 posts
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default UseEffect2;

{/*
useState([]) initializes data as an empty array to store fetched data.
useEffect runs once when the component mounts ([] as dependency).
fetch() makes an HTTP request to jsonplaceholder.typicode.com/posts.
.then(response => response.json()) converts the response to JSON.
.then(data => setData(data)) updates the data state.
.catch(error => console.error(...)) logs errors if the fetch fails.
Displaying only the first 5 posts using .slice(0,5).map(). 
*/}

import { useState, useEffect } from "react";

function MyComponent1() {
    const [text, setText] = useState("");

    useEffect(() => {
        async function fetchData() {
            setText("Hello, World!");
        }
        fetchData();
    })

    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default MyComponent1;

import { useEffect, useState } from "react";

function MyComponent2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 500); 

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <> 
            <p>Count: {count}</p>
        </>
    );
}

export default MyComponent2;
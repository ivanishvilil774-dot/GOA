import { useEffect, useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        document.addEventListener("keydown", increment);

        return () => {
            document.removeEventListener("keydown", increment);
        }
    })

    return ( 
        <>
            <p>count: {count}</p>
        </>
    );
}

export default MyComponent;
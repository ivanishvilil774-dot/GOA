import { useEffect, useState } from 'react';

function Hw1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Hw1 mounted');
        return () => {
            console.log('Hw1 unmounted');
        };
    })
    return (
        <div>
            <h1>Homework 1</h1>
            <h1>count {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Hw1;
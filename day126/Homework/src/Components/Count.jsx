import { useEffect, useState } from "react";

function Count() {
    const [Count, setCount] = useState(0);

    useEffect(() => {
        const handleClick = () => {
            setCount(prevCount => prevCount + 1);
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    })

    const resetCount = (e) => {
        e.stopPropagation();
        setCount(0);
    };


    return (
        <div>
            <h1>Count {Count}</h1>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Count;
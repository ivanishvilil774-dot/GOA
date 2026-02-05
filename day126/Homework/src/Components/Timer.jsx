import { useEffect, useState } from "react";

const Comp1 = () => {
    const [intervalTime, setIntervalTime] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!intervalTime) return;

        const intervalId = setInterval(() => {
        setCount(prev => prev + 1);
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [intervalTime]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIntervalTime(parseInt(e.target.timeInput.value));
    };

    return (
        <div>
            <p>Time: {count}</p>

            <form onSubmit={handleSubmit}>
                <input
                type="number"
                placeholder="Enter milliseconds"
                required
                name="timeInput"
                />
                <button type="submit">submit</button>
            </form>

            <button onClick={() => setIntervalTime(0)}>Stop timer</button>
            <button onClick={() => setCount(0)}>Reset time</button>
        </div>
    );
};

export default Comp1;

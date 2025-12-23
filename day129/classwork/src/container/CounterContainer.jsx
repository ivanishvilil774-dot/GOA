import { useState } from "react";
import CounterPresentational from './presentational/CounterPresentational'

function CounterContainer() {
    const [count, setCount] = useState(0);

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <CounterPresentational
        count={count}
        decrease={decrease}
        />
    );
}

export default CounterContainer;

import { useState } from "react";

function useInfo() {
    const [count, setcount] = useState(0);

    const increase = () => {
        setcount(count + 1);
    }

    const decrease = () => {
        setcount(count - 1);
    }


    const reset = () => {
        setcount(0);
    }

    return {
        count,
        increase,
        decrease,
        reset
    };
}

export default useInfo;
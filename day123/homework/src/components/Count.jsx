import { useState } from "react";

function Count() {
    const [count, SetCount] = useState(0);

    const HandleIncrise = () => {
        SetCount(count => count + 1)
    }

    const Handdicrisee = () => {
        SetCount(count => count - 1)
    }

    const HandleReset = () => {
        SetCount(0)
    }


    return (
        <>
            <p>{count}</p>
            <button onClick={HandleIncrise}>+</button>
            <button onClick={Handdicrisee}>-</button>
            <button onClick={HandleReset}>X</button>
        </>

    );
}

export default Count;
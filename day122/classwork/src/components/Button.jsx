import { useState } from "react";

function Button() {


    const [count, setcout] = useState(0)
    const handelclick = () => {
        setcout(count + 1)
    }
    return (
        <>
            <button onClick={handelclick}>+1</button>
            <p>{count}</p>
        </>
    );
}

export default Button;
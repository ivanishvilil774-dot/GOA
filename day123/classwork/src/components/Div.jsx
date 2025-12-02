import { useState } from "react";
import Pharagraph from "./Paragraph";

function Div() {
    const [count, setCount] = useState(0)

    const HandelClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={HandelClick}></button>
            <Pharagraph count={count}/>
        </div>
    );
}

export default Div;
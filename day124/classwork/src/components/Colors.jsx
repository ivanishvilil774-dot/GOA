import { useState } from "react";

function Colors() {
    
    const [color, setColor] = useState("")

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "cyan",
        "magenta"
    ];

    const handeRandomColor = () => {
        const randomindex = Math.floor(Math.random() * colors.length)
        setColor(colors[randomindex])
    }

    return ( 
        <>
            <p>{color}</p>
            <button onClick={handeRandomColor}>Random Color</button>
        </>
    );
}

export default Colors;
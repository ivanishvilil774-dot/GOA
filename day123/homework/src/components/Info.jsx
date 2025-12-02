import { useState } from "react";

function Info() {

    const [text, setText] = useState("")

    const handleChange = (text) => {
        setText(text.target.value)
    }
    
    return (
        <>
            <input type="text" onChange={handleChange}/>
            <p>Text: {text}</p>
        </>
    );
}

export default Info;
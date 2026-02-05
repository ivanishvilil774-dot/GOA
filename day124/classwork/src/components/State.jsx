import { useState } from "react";

function State() {
    const [active, setActive] = useState(false)

    function handleToogle() {
        setActive(!active)
    }
    return (
        <div>
            <h2>{active ? "აქტიურია" : "არაა აქტიური"}</h2>
            <button onClick={handleToogle}>Change</button>
        </div>
    );
}

export default State;
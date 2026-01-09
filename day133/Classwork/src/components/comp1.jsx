import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Comp1() {
    const info = useContext(MyContext);

    return (
        <p>{info}</p>
    );
}

export default Comp1;
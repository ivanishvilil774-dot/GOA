import { use } from "react";
import { MyContext } from "../context/MyContext";

function Comp2() {
    const {value} = use(MyContext);

    return (  
        <>
            <p>{value}</p>
        </>
    );
}

export default Comp2;
import { useContext } from "react";
import { ThemProvider } from "../context/ThemContext";
import { Themecontext } from "../context/ThemContext"

function Info() {
    const {theme, toggle} = useContext(Themecontext)

    const style = {
        bacgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        height: "100vh"

    }

    return (
        <div style={style}>
            <h1>{theme}</h1>
            <button onClick={toggle}>
                switch to {theme === "light" ? "dark" : "light"}
            </button>
        </div>
    );
}

export default Info;
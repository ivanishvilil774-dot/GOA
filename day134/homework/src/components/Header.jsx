import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

function Header() {
    const {theme} = useContext(ThemeContext)
    
    return (
        <header  className={`Header-${theme}`}>
            <h1>Theme Switcher App</h1>
        </header>
    );
}

export default Header;
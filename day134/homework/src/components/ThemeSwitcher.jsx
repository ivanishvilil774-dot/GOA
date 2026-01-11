import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";


function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return ( 
        <>
            <div className={`theme-${theme}`}>
                <p className="theme">Theme: {theme}</p>
                <button onClick={toggleTheme} className={`button-${theme}`} >Click to Chage Theme</button>
            </div>
        </>
    );
}

export default ThemeSwitcher;
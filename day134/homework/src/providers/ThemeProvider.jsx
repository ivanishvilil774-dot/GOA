import {  createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme(prew => (prew === "light" ? "dark" : "light"))
    }

    return (  
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
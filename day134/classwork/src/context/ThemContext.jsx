import { createContext, useState } from "react"

export const Themecontext = createContext()

export function ThemProvider({ children }) {
    const [theme, setThem] = useState("light")

    function toggle() {
        setThem(prew => (prew === "light" ? "dark" : "light"))
    }

    return(
        <Themecontext.Provider value={{ theme, toggle}}>
            {children}
        </Themecontext.Provider>
    )
} 

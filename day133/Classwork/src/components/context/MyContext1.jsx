import { useState } from "react"
export const MyProvider = ({children}) => {
    const [value, setvalue] = useState("luka")
    return (
        <MyContext.Provider value={{value, setvalue}}>
            {children}
        </MyContext.Provider>
    )
}
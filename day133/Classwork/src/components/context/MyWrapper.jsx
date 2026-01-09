import { useState } from "react";
import { MyContext } from "./MyContext";

export default function MyWrapper({ children }) {
  const [value, setValue] = useState("luka");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

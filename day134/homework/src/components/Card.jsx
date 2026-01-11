import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";


export default function Card() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`card-${theme} card`}>
            <h3>Example Card</h3>
            <p>This card changes its background and text color based on the selected theme.</p>
        </div>
    );
}

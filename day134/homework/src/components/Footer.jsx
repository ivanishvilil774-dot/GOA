// components/Footer.jsx
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

function Footer() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <footer className={`Footer-${theme} footer`}>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Theme Switcher App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
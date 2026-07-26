import { NavLink } from "react-router-dom";
import "./menu.css";

export function Menu() {
    return (
        <nav className="main-menu" aria-label="תפריט ראשי">
            <NavLink to="/">בית</NavLink>
            <NavLink to="/history">היסטוריה</NavLink>
            <NavLink to="/about">אודות</NavLink>
        </nav>
    );
}

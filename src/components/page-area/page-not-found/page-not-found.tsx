import { Link } from "react-router-dom";
import "./page-not-found.css";

export default function PageNotFound() {
    return (
        <section className="not-found">
            <strong>404</strong>
            <h2>הדף לא נמצא</h2>
            <p>נראה שהכתובת שביקשת אינה קיימת.</p>
            <Link to="/">חזרה לדף הבית</Link>
        </section>
    );
}

import "./about.css";

export default function About() {
    return (
        <section className="about-page">
            <div className="page-intro">
                <span className="section-label">קצת עלינו</span>
                <h2>מזג אוויר פשוט וברור</h2>
                <p>
                    אתר המציג מידע עדכני על מזג האוויר ביישובים ברחבי ישראל.
                </p>
            </div>

            <div className="about-grid">
                <article>
                    <span className="about-icon" aria-hidden="true">☀</span>
                    <h3>על האתר</h3>
                    <p>
                        בוחרים יישוב ומקבלים טמפרטורה, תיאור, מהירות רוח וסמל
                        מזג אוויר. החיפושים נשמרים בדפדפן ונגישים בדף ההיסטוריה.
                    </p>
                </article>

                <article>
                    <span className="about-icon" aria-hidden="true">⌨</span>
                    <h3>על המתכנת</h3>
                    <p>
                        האתר פותח על ידי חן ויצמן, מתכנת מתחיל הנמצא בתחילת דרכו
                        בעולם הפיתוח ולומד לבנות יישומים שימושיים, ברורים ונוחים.
                    </p>
                </article>
            </div>
        </section>
    );
}




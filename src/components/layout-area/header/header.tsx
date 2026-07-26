import "./header.css";

export function Header() {
    return (
        <header className="site-header">
            <div className="header-content">
                <div className="brand-icon" aria-hidden="true">☀</div>
                <div>
                    <p className="eyebrow">מזג האוויר בישראל</p>
                    <h1>Weather Israel</h1>
                </div>
            </div>
        </header>
    );
}

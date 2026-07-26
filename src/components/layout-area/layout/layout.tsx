import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { Routing } from "../../../routing/routing";
import cloudsVideo from "../../../assets/clouds.mp4";
import "./layout.css";

export function Layout() {
    return (
        <div className="layout">
            <div className="video-background" aria-hidden="true">
                <video autoPlay muted loop playsInline preload="auto">
                    <source src={cloudsVideo} type="video/mp4" />
                </video>
                <div className="video-overlay" />
            </div>

            <Header />
            <Menu />
            <main className="page-container">
                <Routing />
            </main>
            <footer>
                &copy; {new Date().getFullYear()} Weather Israel
            </footer>
        </div>
    );
}

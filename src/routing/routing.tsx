import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../components/page-area/spinner/spinner";

const Home = lazy(() => import("../components/page-area/home/home"));
const History = lazy(() => import("../components/page-area/history/history"));
const About = lazy(() => import("../components/page-area/about/about"));
const PageNotFound = lazy(() => import("../components/page-area/page-not-found/page-not-found"),);

export function Routing() {
    return (
        <Suspense fallback={<Spinner text="טוען דף..." />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
}

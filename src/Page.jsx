import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import { ThemeContext } from "./contexts";

export default function Page() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
}

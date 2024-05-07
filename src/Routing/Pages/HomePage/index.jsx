import TopBar from "../SharedComponents/Topbar.jsx";
import Hero from "./Components/Hero.jsx";
import Movies from "./Components/SearchMovies.jsx";

export default function HomePage() {
    return(
        <div className="bg-[#12182b] px-52 h-full flex flex-col overflow-scroll">
            <TopBar />
            <Hero />
            <Movies />
        </div>
    );
}

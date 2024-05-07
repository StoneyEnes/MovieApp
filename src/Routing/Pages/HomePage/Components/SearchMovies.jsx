import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useEffect, useState } from 'react';
import blackwidow from "../../../../../public/MovieCoverImages/blackwidow.svg";
import shangchi from "../../../../../public/MovieCoverImages/shangchi.svg";
import loki from "../../../../../public/MovieCoverImages/loki.svg";
import howimetyourmother from "../../../../../public/MovieCoverImages/howimetyourmother.svg";
import {useDispatch, useSelector} from "react-redux";

export default function Movies() {
    const [selectedMovies, setSelectedMovies] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [countViewData, setCountViewData] = useState(0);

    const searchValue = useSelector(state => state.mainSearch.searchTerm);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);

    function setMovies(movieType) {
        setSelectedMovies(movieType);
    }

    const movieData = [
        {
            id: 1,
            name: "Black Widow",
            star: 6.8,
            image: blackwidow,
            type: "Movie"
        },
        {
            id: 2,
            name: "Shang Chi",
            star: 7.9,
            image: shangchi,
            type: "Movie"
        },
        {
            id: 3,
            name: "Loki",
            star: 8.4,
            image: loki,
            type: "Movie"
        },
        {
            id: 4,
            name: "How I Met Your Mother",
            star: 8.3,
            image: howimetyourmother,
            type: "TV Show"
        },

    ];

    function ViewMovies() {
        const filteredData = movieData
            .filter((movie) =>
                (selectedMovies === "All" || movie.type.includes(selectedMovies)) &&
                (searchValue === "" || movie.name.toLowerCase().includes(searchValue.toLowerCase()))
            );

        setCountViewData(filteredData.length);

        if (filteredData.length === 0) {
            return (
                <div className="bg-[#383a4c] w-full absolute h-40 rounded-lg items-center justify-center flex">
                    <p className="text-4xl text-white">Veri Bulunamadı!</p>
                </div>
            );
        }

        return filteredData.map((movie, key) => (
            <div key={key} className="max-w-[17.5rem] flex justify-center h-[30rem] bg-[#383a4c] rounded-lg relative">
                <img src={movie.image} className="rounded-lg absolute top-2 pointer-events-none" alt="" />
                <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                    <p>{movie.name}</p>
                </div>
            </div>
        ));
    }

    return (
        <div>
            <TabGroup>
                <TabList
                    className="bg-[#0e1321] mt-[3rem] font-bold py-2 transition-all rounded-lg max-w-80 items-center text-gray-400 justify-center flex"
                >
                    <Tab
                        className={`${
                            selectedMovies === 'All' ? 'bg-[#7B6EF6] text-white' : ''
                        } transition-all rounded-lg px-7 py-3`}
                        onClick={() => setMovies('All')}
                    >
                        <p>All</p>
                    </Tab>
                    <Tab
                        className={`${
                            selectedMovies === 'Movie' ? 'bg-[#7B6EF6] text-white' : ''
                        } transition-all rounded-lg px-7 py-3`}
                        onClick={() => setMovies('Movie')}
                    >
                        <p>Movies</p>
                    </Tab>
                    <Tab
                        className={`${
                            selectedMovies === 'TV Show' ? 'bg-[#7B6EF6] text-white' : ''
                        } transition-all rounded-lg px-7 py-3`}
                        onClick={() => setMovies('TV Show')}
                    >
                        <p>TV Shows</p>
                    </Tab>
                </TabList>


                {countViewData !== 0 && (
                    <h2 className="text-4xl text-gray-400 mt-4">{selectedMovies} <small className="text-lg">({countViewData})</small></h2>
                )}

                <TabPanels
                    className={`grid grid-cols-4 gap-x-[1rem] mt-4 relative`}
                >
                    <ViewMovies />
                </TabPanels>
            </TabGroup>
        </div>
    );
}

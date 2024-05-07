import {CiSearch} from "react-icons/ci";
import {useDispatch} from "react-redux";
import {setTerm} from "../../../../Redux/Slicer/MainSearchSlicer.js";

export default function Hero() {

    const dispatch = useDispatch()

    return (
        <div className="mt-24">
            <h2 className="text-[70px] text-white font-bold">MaileHereko</h2>
            <p className="text-gray-400 w-[600px]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
            </p>

            <div className="relative mt-10">
                <CiSearch className="w-10 h-10 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                    type="text"
                    onChange={(e) => dispatch(setTerm(e.target.value))}
                    className="pl-14 text-xl pr-4 py-2 text-gray-400 h-[4rem] bg-[#1d263a] w-[21.5rem] border rounded-xl border-gray-700"
                    placeholder="Search Movies or TV Shows"
                />
            </div>

        </div>
    );
}
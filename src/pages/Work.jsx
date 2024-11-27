import {Header} from "../components/Header"
import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { ArtContext } from "../context/ArtContext";
import { ArrowBack, OpenInFullRounded } from "@mui/icons-material";


export const Work = () => {

    const {id} = useParams();
    const {art} = useContext(ArtContext);

    //Filtro la obra segun el id de la <Card> que se clickea, para mostrarla individualmente.
    const work = art.find( art => art.id === parseInt(id));


    //Manejar el click para abrir la obra en otra pestaña.
    const handleClick = () => {
        window.open(work.image);
    }

    return (
        <>
        <Header></Header>
        <Link to={"/home"}>
        <ArrowBack fontSize="medium" titleAccess="Back to home" className="mx-16 my-8 hover:cursor-pointer"></ArrowBack>
        </Link>
        <main className="flex flex-col lg:flex-row my-3 mx-40 justify-between items-center gap-20 ">
            <div className="flex flex-col lg:relative items-center gap-4 min-w-96">
                <img src={work.image} className="select-none w-full h-auto lg:min-w-[500px]"></img>
                <img className="z-20 lg:absolute max-w-32 max-h-56 -right-16 bottom-14 select-none" src={work.artistImage}></img>
                <div className="flex gap-1 items-center" 
                onClick={handleClick}>
                <p className="font-roboto opacity-90 hover:cursor-pointer hover:underline">View image in other tab</p>
                <OpenInFullRounded fontSize="small"></OpenInFullRounded>
                </div>
            </div>
            <div className="relative font-roboto min-w-96 px-10 text-justify">
                <div className="flex flex-col gap-3 items-center font-roboto p-4 bg-white ">
                <h2 className="text-4xl font-bold">{work.title}</h2>
                <p className="opacity-70">{work.artist}</p>
                </div>
                <h2 className="max-w-md break-words opacity-70 text-base -tracking-tighter">{work.description}</h2>
                <p className="absolute -top-16 left-1/2 transform -translate-x-1/2 font-black opacity-10 font-roboto text-9xl">{work.year}</p>
            </div>
        </main>
        </>
    )
}

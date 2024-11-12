import {Header} from "../components/Header"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { ArtContext } from "../context/ArtContext";


export const Work = () => {

    const {id} = useParams();
    const {art} = useContext(ArtContext);

    //Filtro la obra segun el id de la <Card> que se clickea, para mostrarla individualmente
    const work = art.find( art => art.id === parseInt(id));

    return (
        <>
        <Header></Header>
        <img src={work.image}></img>
        </>
    )
}

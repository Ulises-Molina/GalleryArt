import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { useContext } from "react"
import { ArtContext } from "../context/ArtContext"

export const Home = () => {

    const {art} = useContext(ArtContext);
    

    return (
        <>
        <Header/>
        <main className="grid grid-cols-[repeat(4,minmax(100px,1fr))] gap-10 my-16 mx-40 card-container auto-rows-[20px]">
        {art.map((art) => 
        <Card 
        key={art.id}
        id={art.id} 
        imagen={art.image} 
        title={art.title} 
        artist={art.artist}
        />)}
        </main>
        </>
        
    )
}

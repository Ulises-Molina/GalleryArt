import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { useContext } from "react"
import { ArtContext } from "../context/ArtContext"
import { Footer } from "../components/Footer"

export const Home = () => {

    const {art} = useContext(ArtContext);
    

    return (
        <>
        <Header/>
        <main className="flex flex-col md:grid lg:grid-cols-[repeat(3,minmax(100px,1fr))] gap-10 my-16 mx-40 card-container auto-rows-[20px] md:grid-cols-[repeat(2,minmax(100px,1fr))] xl:grid-cols-[repeat(4,minmax(100px,1fr))] items-center">
        {art.map((art) => 
        <Card 
        key={art.id}
        id={art.id} 
        imagen={art.image} 
        title={art.title} 
        artist={art.artist}
        />)}
        </main>
        <Footer></Footer>
        </>
        
    )
}

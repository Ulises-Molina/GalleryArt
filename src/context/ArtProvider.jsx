import { ArtContext} from "./ArtContext";
import { useState } from "react";
import { useEffect } from "react";

export const ArtProvider = ({children}) => {

    //Creo el estado loading para mostrar el spinner mientras se carga la informacion de la API
    const [loading, setLoading] = useState(true);
    const [art, setArt] = useState([])

    //Fetching de datos de la API y set del loading a false
    const fetchingData = async () => {
    try {
        const res = await fetch('/db.json');
        const data = await res.json(); 
        setArt(data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);  // Manejo de errores en caso de que algo falle
    }
};
    useEffect(() => {
        fetchingData()  
    }, [])


    return (
        <ArtContext.Provider value={{art,loading}}>
        {children}
    </ArtContext.Provider>
    )
}



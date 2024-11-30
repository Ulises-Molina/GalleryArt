import { ArtContext} from "./ArtContext";
import { useState } from "react";
import { useEffect } from "react";

export const ArtProvider = ({children}) => {

    //Creo el estado loading para mostrar el spinner mientras se carga la informacion de la API
    const [loading, setLoading] = useState(true);



    const [art, setArt] = useState([])

    //Fetching de datos de la API y set del loading a false
    const fetchingData = () => {
        fetch('/db.json')
        .then(res => res.json())
        .then(data => setArt(data))
        setLoading(false)
    }
    useEffect(() => {
        fetchingData()
    }, [])


    return (
        <ArtContext.Provider value={{art,loading}}>
        {children}
    </ArtContext.Provider>
    )
}



import { ArtContext} from "./ArtContext";
import { useState } from "react";
import { useEffect } from "react";

export const ArtProvider = ({children}) => {

    const [art, setArt] = useState([])

    //Fetching de datos de la API
    const fetchingData = () => {
        fetch('/db.json')
        .then(res => res.json())
        .then(data => setArt(data))
    }
    useEffect(() => {
        fetchingData()
    }, [])


    return (
        <ArtContext.Provider value={{art}}>
        {children}
    </ArtContext.Provider>
    )
}



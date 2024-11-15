import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

export const Card = ({title,artist,imagen,id}) => {


const navigate = useNavigate();

const handleClick = () => {
    navigate(`/work/${id}`)
}

//Le aviso a EsLint que las props que entran en la card son validas
    Card.propTypes = {
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
        };


    return (
        <div className={`flex h-full w-full row-span-5 relative group hover:cursor-pointer min-w-80 sm:min-w-0 p-3`}
        onClick={handleClick}>
                <img src={imagen} alt="Work of art" className="w-full hover:scale-105 transition-transform duration-300 select-none"></img>
            <h2 className="font-roboto absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-2xl whitespace-nowrap opacity-0 group-hover:opacity-90 transition-opacity duration-300">{title}</h2>
            <p className="font-roboto absolute left-1/2 transform -translate-x-1/2 bottom-5 text-gray-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300">{artist}</p>
        </div>
    )
}

import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import {motion} from "motion/react"

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
        <motion.div
        initial={{ opacity: 0,translateY: 150 }}
        whileInView={{ opacity: 1,translateY: 0,transition: { duration: .5 } }}
        
        className={`flex h-full w-full row-span-5 relative group hover:cursor-pointer min-w-64  p-3`}
        onClick={handleClick}>
                <img src={imagen} alt="Work of art" className="w-full hover:scale-105 transition-transform duration-300 select-none"></img>
            <h2 className="font-roboto absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-2xl whitespace-nowrap opacity-0 group-hover:opacity-90 transition-opacity duration-300">{title}</h2>
            <p className="font-roboto absolute left-1/2 transform -translate-x-1/2 bottom-5 whitespace-nowrap text-gray-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300">{artist}</p>
        </motion.div>
    )
}

import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/dataContext";
import { useLoadingContext } from "../Context/loadingContext";

const Tech = () => {
    const loading = useLoadingContext();
    const {data} = useContext(DataContext);
    const {name} = useParams();

    console.log(loading);

    const tech = data.technology.find(tech => {return tech.name === name} )

    return ( 
        <div>
            <div className='tech-section one'>
                <p>THE TERMINOLOGY ...</p>
                <h1>{tech.name}</h1>
                <p>{tech.description}</p>
            </div>
            
            <div className='tech-section one'>
                <img src={'.'+tech.images.landscape} alt="destination" />
            </div>

        </div>
     );
}
 
export default Tech;
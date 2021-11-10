import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/dataContext";
import { useLoadingContext } from "../Context/loadingContext";

const CrewMan = () => {
    const loading = useLoadingContext();
    const {data} = useContext(DataContext);
    const {name} = useParams();

    console.log(loading);

    const crew = data.crew.find(destination => {return destination.name === name} )

    return ( 
        <div>
            <div className='crew-section one'>
                <h3>{crew.role}</h3>

                <h2 className='crew name'>{crew.name}</h2>

                <p>{crew.bio}</p>
            </div>

            <div className='crew-section two'>
                <img src={crew.images.png} alt="destination" />
            </div>
           

        </div>
     );
}
 
export default CrewMan;
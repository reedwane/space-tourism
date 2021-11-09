import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/dataContext";
import { useLoadingContext } from "../Context/loadingContext";


const Destination = () => {
    const loading = useLoadingContext();
    const {data} = useContext(DataContext);
    const {name} = useParams();

    console.log(loading, data);

    const destination = data.destinations.find(destination => {return destination.name === name} )

    return ( 
        <div>
            <h1>{destination.name.toUpperCase()}</h1>
            <img src={destination.images.png} alt="destination" />

            <p className='description'>
                {destination.description}
            </p>

            <p className='travel-time'>
                <span className='distance'>{destination.distance}</span>
               
                <span className='travel'>{destination.travel}</span>
            </p>
        </div>
     );
}
 
export default Destination;
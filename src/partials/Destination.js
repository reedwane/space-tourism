import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/dataContext";

const Destination = () => {

    const {data} = useContext(DataContext);
    const {name} = useParams();

    const destination = data.destinations.find(destination => {return destination.name === name} )

    return ( 
        <div>
            <h1>{destination.name}</h1>

        </div>
     );
}
 
export default Destination;
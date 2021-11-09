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
            <h1>{crew.name}</h1>

        </div>
     );
}
 
export default CrewMan;
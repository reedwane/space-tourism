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
            <h1>{tech.name}</h1>

        </div>
     );
}
 
export default Tech;
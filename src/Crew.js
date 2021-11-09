import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Crew = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);
    const crew = data.crew;
    
    return (
        <div>
            <h1>Destination</h1>
            {loading && <Loading />}
            {data && <div className="content">
                <div className="crew nav">
                    {data && crew.map((crew) => (
                            <Link to={crew.name} key={crew.name}>crewman</Link>
                        ))}
                </div>
                
                <Outlet />
            </div>}
            
        </div>
      );
}
 
export default Crew;
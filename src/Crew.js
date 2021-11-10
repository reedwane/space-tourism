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
            <h2>02 MEET YOUR CREW</h2>
            {loading && <Loading />}
            {data && <div className="content">

            <Outlet />
                <div className="crew nav">
                    {data && crew.map((crew) => (
                            <Link to={crew.name} key={crew.name}>circle </Link>
                        ))}
                </div>
                
                
            </div>}
            
            
        </div>
      );
}
 
export default Crew;
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Destinations = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);
    const destinations = data.destinations;
    
    return (
        <div>
            <h2>01 PICK YOUR DESTINATION</h2>
            {loading && <Loading />}
            {data && <div className="content">
                <div className="destinations nav">
                    {data && destinations.map((destination) => (
                            <Link to={destination.name} key={destination.name}>{destination.name}</Link>
                        ))}
                </div>
                
                <Outlet />
            </div>}
            
        </div>
      );
}
 
export default Destinations;
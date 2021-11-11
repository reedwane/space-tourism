import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Destinations = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);

    return (
        <div className='destinations'>
            <h2>01 PICK YOUR DESTINATION</h2>
            {loading && <Loading />}
            {data && <div className="content">
                
                <Outlet />
            </div>}
            
        </div>
      );
}
 
export default Destinations;
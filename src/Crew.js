import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Crew = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);
    
    return (
        <div className='crew'>
            <h5><span>02</span> MEET YOUR CREW</h5>
            {loading && <Loading />}
            {data && <div className="content">

            <Outlet />
            </div>}
            
            
        </div>
      );
}
 
export default Crew;
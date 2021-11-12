import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Technology = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);
    
    return (
        <div className='technology'>
            <h5><span>03</span> SPACE LAUNCH 101</h5>
            {loading && <Loading />}
            {data && <div className="content">
                
                
                <Outlet />
            </div>}
            
        </div>
      );
}
 
export default Technology;
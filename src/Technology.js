import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";

const Technology = () => {
    const loading = useLoadingContext()
    const {data} = useContext(DataContext);
    const technology = data.technology;
    
    return (
        <div>
            <h2>03 SPACE LAUNCH 101</h2>
            {loading && <Loading />}
            {data && <div className="content">
                <div className="technology nav">
                    <ul>
                        {data && technology.map((tech) => (
                            <li>
                                <Link to={tech.name} key={tech.name}>{technology.indexOf(tech)+1}</Link>
                            </li>
                            ))}
                    </ul>
                    
                </div>
                
                <Outlet />
            </div>}
            
        </div>
      );
}
 
export default Technology;
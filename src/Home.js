import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";
const Home = () => {

	const loading = useLoadingContext();
	const {data} = useContext(DataContext);
	console.log(data);
	
	return (
		<div>
			{loading && <Loading/>}
			{data &&  <div className='home'>
				<div className='home text-content'>
					<h1>So, you want to travel to <span className="text largest">Space</span></h1>
					
					<p>
						Let’s face it; if you want to go to
						space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a
						truly out of this world experience!
					</p>
				</div>
					<Link className='circle explore' to='destinations/Moon'>Explore</Link>
				</div>
			}
		</div>
	);
};

export default Home;

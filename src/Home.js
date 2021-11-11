import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context/dataContext";
import { useLoadingContext } from "./Context/loadingContext";
import Loading from "./partials/Loading";
const Home = () => {

	const loading = useLoadingContext();
	const {data} = useContext(DataContext);
	
	return (
		<div className='home'>
			{loading && <Loading/>}
			{data &&  <div className='home-content'>
				<div className='text-content'>
					<h5>So, you want to travel to</h5>
					<h1>Space</h1>
					
					<p>
						Let’s face it; if you want to go to
						space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we’ll give you a
						truly out of this world experience!
					</p>
				</div>
					<p className='circle'><Link className='explore' to='destinations/destination'>Explore</Link></p>
				</div>
			}
		</div>
	);
};

export default Home;

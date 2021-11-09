<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
>>>>>>> 7c08dbb6db610df77da20c7c0cc7f05e0942d4e3
const Nav = () => {
	return (
		<div className="nav">
			<img src="assets/shared/logo.svg" alt="logo" />
			<div className="line"></div>
			<ul>
				<li>
<<<<<<< HEAD
					<Link to='/' ><span className="number">00</span> Home</Link>
				</li>
				<li>
					<Link to='destinations/Moon' ><span className="number">01</span> Destinations</Link>	
				</li>
				<li>
					<Link to='crew' ><span className="number">02</span> Crew</Link>
				</li>
				<li>
					<Link to='technology' ><span className="number">03</span> Technology</Link>
=======
					<span className="number">00</span> Home
				</li>
				<li>
					<span className="number">01</span> Destinations
				</li>
				<li>
					<span className="number">02</span> Crew
				</li>
				<li>
					<span className="number">03</span> Technology
>>>>>>> 7c08dbb6db610df77da20c7c0cc7f05e0942d4e3
				</li>
			</ul>
		</div>
	);
};

export default Nav;

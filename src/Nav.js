import { Link } from "react-router-dom";
import logo from './assets/shared/logo.svg';
import iconOpen from './assets/shared/icon-hamburger.svg';
import iconClose from './assets/shared/icon-close.svg';

const Nav = () => {
	
	
	
	const toggleNavOpen = (e) => {
		const navlist = document.querySelector('.nav ul');
		e.target.classList.toggle('open');
		e.target.nextElementSibling.classList.toggle('open');
		navlist.classList.toggle('show');
	}

	const toggleNavClose = (e) => {
		const navlist = document.querySelector('.nav ul');
		const closed = document.querySelector('.closed');
		e.target.classList.toggle('open');
		closed.classList.toggle('open');
		navlist.classList.toggle('show');
	}


	return (
		<div className="nav">
			{/* <img src="assets/shared/logo.svg" alt="logo" /> */}
			<img src={logo} alt="logo" id='logo' />
			{/* <div className="line"></div> */}
			<div className="menu">
				<img src={iconOpen} alt="hamburger"  className='ham closed open' onClick={toggleNavOpen} />
				<img src={iconClose} alt="hamburger"  className='ham opened' onClick={toggleNavClose} />
			</div>

			<ul className='hide'>
				<li>
					<Link to='/' ><span className="number">00</span> Home</Link>
				</li>
				<li>
					<Link to='destinations/Moon' ><span className="number">01</span> Destinations</Link>	
				</li>
				<li>
					<Link to='crew/Douglas%20Hurley' ><span className="number">02</span> Crew</Link>
				</li>
				<li>
					<Link to='technology/Launch%20vehicle' ><span className="number">03</span> Technology</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;

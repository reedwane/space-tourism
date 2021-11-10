import { Link } from "react-router-dom";
// import logo from '/assets/shared/logo.svg';

const Nav = () => {
	
	const toggleNav = () => {
		const closed = document.querySelector('.ham-closed');
		const navlist = document.querySelector('.nav ul');
		if(closed.getAttribute('src') === '/assets/shared/icon-hamburger.svg'){
			closed.setAttribute('src', '/assets/shared/icon-close.svg');
		}else{
			closed.setAttribute('src', '/assets/shared/icon-hamburger.svg');
		}
		navlist.classList.toggle('show');
	}
	return (
		<div className="nav">
			{/* <img src="assets/shared/logo.svg" alt="logo" /> */}
			<img src='/assets/shared/logo.svg' alt="logo" id='logo' />
			{/* <div className="line"></div> */}
			<img src='/assets/shared/icon-hamburger.svg' alt="hamburger" id='ham' className='ham-closed' onClick={toggleNav} />
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

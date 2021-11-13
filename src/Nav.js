import { Link } from "react-router-dom";
import logo from './assets/shared/logo.svg';
import iconOpen from './assets/shared/icon-hamburger.svg';
import iconClose from './assets/shared/icon-close.svg';

const Nav = () => {
	

	const setActive = () => {
		document.querySelectorAll('.nav li').forEach(nav => nav.classList.remove('active'));
		const path = window.location.pathname.split('/')[1];
		if(path){
			document.querySelector('.nav li:first-of-type').style.borderBottom = 'none';
			if(path === 'destinations'){
				document.querySelector('.nav li:nth-of-type(2)').classList.add('active');
			}else if(path === 'crew'){
				document.querySelector('.nav li:nth-of-type(3)').classList.add('active');
			}else{
				document.querySelector('.nav li:last-of-type').classList.add('active');
			}
		}else{
			document.querySelectorAll('.nav li').forEach(nav => nav.classList.remove('active'));
			if(window.screen.width > 600){
				document.querySelector('.nav li:first-of-type').style.borderBottom = '2px solid #FFFFFF';	
			}
		}

		
	}

	window.onload = (e) => {
		setActive();
	}
	
	document.addEventListener('click', (e) => {
		const navlist = document.querySelector('.nav ul');
		const closed = document.querySelector('.closed');
		const opened = document.querySelector('.opened');

		if(e.target !== navlist && e.target !== closed
			&& e.target !== opened && navlist.classList.contains('show')){
			navlist.classList.toggle('show');
			closed.classList.toggle('open');
			opened.classList.toggle('open');

		}
		// navlist.classList.toggle('show');
	})
	
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

			<span className='line'></span>
			<ul className='hide' onClick={() => setActive()}>
				<li>
					<Link to='/'><span className="number">00</span> Home</Link>
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

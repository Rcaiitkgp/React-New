import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from './logo1.png'; 

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img className="logo" src={logo} alt="logo" />
			<nav ref={navRef}>
				<a href="/#">ABOUT</a>
				<a href="/#">EVENTS</a>
				<a href="/#">TEAM</a>
				<a href="/#">OUR ALUMNI</a>
                <a href="/#">CONTACT US</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        
	);
}

export default Navbar;
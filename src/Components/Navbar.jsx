import react, { useState } from 'react';

import './navbar.css';

function Navbar(){
    const[ active ,setActive] = useState("nav_menu");
    const[toggleIcon , setToggleIcon]=useState("nav_toggler");

    const navToggle = () =>{
        active=== 'nav_menu'
         ? setActive('nav_menu nav_active')
         : setActive("nav_menu");

         //toggler icon
        toggleIcon ==='nav_toggler'
        ? setToggleIcon('nav_toggler toggle')
        : setToggleIcon('nav_toggler ');
    }

    return(
        <>
       <nav className='nav'>
        <a href='#' className='nav_brand'> <img src="images/logo12.png" alt="company logo" srcset="" /></a>
        <ul className={active}>
            <li className="nav_item">
            {/* <Link to="/" className="nav-link">Home</Link> */}
                
                <a href="" className="nav-link">Home</a>
                
                </li>
            <li className="nav_item"><a href="" className="nav-link">About</a></li>
            <li className="nav_item"><a href="" className="nav-link">Services</a></li>
            <li className="nav_item"><a href="" className="nav-link">Careers</a></li>           
            <li className="nav_item"><a href="" className="nav-link">Portfolio</a></li>
            <li className="nav_item"><a href="../contact/Contact.jsx" className="nav-link">Contact us</a></li>

        </ul>
        <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        </div>
       </nav>
        </>
    );
}

export default Navbar;
import {Link, NavLink} from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
    return(
        <nav>
            <NavLink className={({isActive}) => (isActive ? "actice":"undefined")}
            to='/'
            >
                Home
            </NavLink>
            <NavLink
                className={({isActive}) => (isActive ? "actice":"undefined")}
                to='/about'
            
            >
                About
            </NavLink>
        </nav>
    );
};
export default Navbar;
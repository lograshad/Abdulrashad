import { Link } from "react-router-dom";
import { useContext } from 'react';
import StateContext from '../../StateContext';
import "./navbar.css";

const NavBar = () => {
    const { curse, setCurse } = useContext(StateContext);
    const updateCurse = () => {
      setCurse(true);
    }
    const updateLeave = () => {
      setCurse(false);
    }
    return ( 
        <div className="navbar-container">
            <ul onMouseOver={updateCurse} onMouseLeave={updateLeave} onClick={updateLeave}>
                <li><Link to='/about_me'>behind the mask</Link></li>
                <li><a href="/#portfolio">batfolio</a></li>
                <li><a href="/#contact">contact me</a></li>
            </ul>
        </div>
     );
}
 
export default NavBar;
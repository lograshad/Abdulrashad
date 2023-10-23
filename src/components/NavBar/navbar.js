import { Link } from "react-router-dom";
import { useContext } from 'react';
import StateContext from '../../StateContext';

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
                <li><Link>behind the mask</Link></li>
                <li><Link>batfolio</Link></li>
                <li><Link>contact me</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;
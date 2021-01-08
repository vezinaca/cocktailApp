import react from "react";
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <header>
                
                <nav>
                    <img className="logo" src={logo} width="50px" height="50px" alt="logo"/>
                    <ul className="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                    <Link to="/contact"><button className="contact">Contact</button></Link>
                </nav>
                
            </header>
        </div>
    )
}

export default Header;
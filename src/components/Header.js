import react from "react";
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { DrinkContext} from "./DrinkContext";
import { useContext } from "react/cjs/react.development";

function Header(){
    const [drinks, setDrinks] = useContext(DrinkContext);
    return(
        <div>
            <header>
                
                <nav>
                    <img className="logo" src={logo} width="50px" height="50px" alt="logo"/>
                    <ul className="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/shop"><li>Shop</li></Link>
                        <Link to="/about"><li>About <span>{drinks.length}</span></li></Link>
                    </ul>
                    <Link to="/contact"><button className="contact">Contact</button></Link>
                </nav>
                
            </header>
        </div>
    )
}

export default Header;
import './components.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
         <div className="symbols">
            <div className="header-links">
                <Link to="/">About |</Link>
                <Link to="/projects">Projects |</Link>
                <Link to="/other">Other</Link>
            </div>

            <img src="../assets/minimize.png" alt="minimize symbol" />
            <img src="../assets/zoom.png" alt="zoom in symbol" />
            <img src="../assets/close.png" alt="close symbol" />
        </div>
    )
}

export default Header; 
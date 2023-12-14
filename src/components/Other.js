import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Symbols from './Header';

const Other = () => {
    return (
        <div className="large-window">
            <div className="window-header">
                <h2><Link to="/" className="ld-link">Linh Dang</Link> <span className="arrow-text">&gt;&gt; Other</span></h2>

                <Symbols />
            </div>
            <div className="container-window">
                <div className="other-window">
                    <span className="cursor">
                        <p>Coming soon!!</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Other; 
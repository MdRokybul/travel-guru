import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlaceName } from '../../App';
import './Main.css'


const Main = () => {
    const [place, setPlace] = useContext(PlaceName);
    return (
        <div className="areaStyle">
            <div className="d-flex justify-content-center">
                <Link to="/booking" onClick={() => setPlace("coxsbazar")}>
                    <div className="boxStyle coxsbazar">
                        <h3 className="text-light titleStyle">COX'S BAZAR</h3>
                    </div>
                </Link>
                <Link to="/booking" onClick={() => setPlace("sreemangal")}>
                    <div className="boxStyle sreemangal">
                        <h3 className="text-light titleStyle"> SREEMANGAL </h3>
                    </div>
                </Link>
                <Link to="/booking" onClick={() => setPlace("sundarban")}>
                    <div className="boxStyle sundarban">
                        <h3 className="text-light titleStyle">SUNDARBAN</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Main;
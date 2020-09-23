import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="myHeader">
                <div className="headItem"><Link to="/about-us">About Us</Link></div>
                <div className="headItem"><Link to="/my-profile">My Profile</Link></div>
                <div className="headItem"><Link to="/products">Products</Link></div>
                <div className="headItem"><Link to="/">Home</Link></div>
            </div>
        );
    }
}

export default Header;

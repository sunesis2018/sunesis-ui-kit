import React from 'react';
import logo from '../images/logo.gif';
import {
    FaAlignRight,
    FaCaretDown, FaCog,
    FaHome,
    FaInfo,
    FaShoppingCart,
    FaSignInAlt,
    FaThLarge,
    FaFontAwesomeAlt
} from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';




export default  class NavigationBar extends React.Component{
    state = {
        isOpen:false
    };
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return  (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Company logo" className="logo"/>
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/" className="nav-link-a"><FaHome/> Home</Link>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link-a dropbtn"><FaCog/> Examples
                            <FaCaretDown/>
                            </Link>
                            <div className="dropdown-content">
                                <Link to="/login"><FaSignInAlt/> Login</Link>
                                <Link to="/landing"><FaThLarge/> Landing Page</Link>
                                <Link to="/icons"><FaFontAwesomeAlt/> Icons</Link>
                            </div>
                        </li>
                        <li>
                            <a href="https://sunesis2018.github.io/sunesis-ui-kit/" className="nav-link-a"><FaInfo/> Documentation</a>
                        </li>
                        <li>
                            <Link to="/login" className="nav-link-a btn-primary btn-round nav-link-btn"><FaShoppingCart/> Go Pro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );

    }

}

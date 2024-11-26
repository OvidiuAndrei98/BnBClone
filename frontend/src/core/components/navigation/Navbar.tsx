import React from 'react';
import './Navbar.css';
import { HamburgerMenu, NavbarLogo, ProfileIconSvg } from 'src/core/assets/Icons';
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to={'/'}>
                    <NavbarLogo />
                </Link>
            </div>
            <div className="navbar-settings">
                {/* <div className="settings-inchiriaza">Inchiriaza locuinta</div> */}

                <div className="user-hamburger">
                    <HamburgerMenu />
                </div>
                <div className="user-icon">
                    <ProfileIconSvg />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

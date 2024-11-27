import React, { useState } from 'react';
import './Navbar.css';
import { HamburgerMenu, NavbarLogo, ProfileIconSvg } from 'src/core/assets/Icons';
import { Link } from 'react-router';
import { Popover } from 'antd';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const settingsMenuContent = () => (
        <div className="settings-menu-container">
            <div className="top-container">
                <div className="menu-item">Sign up</div>
                <div className="menu-item">Login</div>
            </div>
            <div className="divider"></div>
            <div className="bottom-container">
                <div className="menu-item">Airnbnb your home</div>
            </div>
        </div>
    );

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to={'/'}>
                    <NavbarLogo />
                </Link>
            </div>
            <Popover
                overlayClassName="settings-popup-container"
                content={settingsMenuContent()}
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
                arrow={false}
                placement="bottomLeft"
            >
                <div className="navbar-settings">
                    {/* <div className="settings-inchiriaza">Inchiriaza locuinta</div> */}

                    <div className="user-hamburger">
                        <HamburgerMenu />
                    </div>
                    <div className="user-icon">
                        <ProfileIconSvg />
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default Navbar;

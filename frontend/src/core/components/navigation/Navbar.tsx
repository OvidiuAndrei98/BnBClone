import React, { useContext, useState } from 'react';
import './Navbar.css';
import { HamburgerMenu, NavbarLogo, ProfileIconSvg } from 'src/core/assets/Icons';
import { Link } from 'react-router';
import { Popover } from 'antd';
import { AuthenticationContext } from 'src/core/AuthenticationBoundary';
import { DataProviderContext } from 'src/App';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const authedUser = useContext(AuthenticationContext);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = async (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const settingsMenuContent = () => (
        <div className="settings-menu-container">
            <div className="top-container">
                <div className="menu-item">Sign up</div>
                <div className="menu-item">Login</div>
                <div className="menu-item">{authedUser.userDetails.email}</div>
            </div>
            <div className="divider"></div>
            <div className="bottom-container">
                <div className="menu-item">Airbnb your home</div>
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
                        {authedUser ? (
                            <img className="user-logo" src={authedUser.userDetails.picture} />
                        ) : (
                            <ProfileIconSvg />
                        )}
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default Navbar;

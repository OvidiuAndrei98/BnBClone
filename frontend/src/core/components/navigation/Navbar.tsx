import React, { useContext, useState } from 'react';
import './Navbar.css';
import { HamburgerMenu, NavbarLogo, ProfileIconSvg } from 'src/core/assets/Icons';
import { Link } from 'react-router';
import { message, Popover } from 'antd';
import { AuthenticationContext } from 'src/core/AuthenticationBoundary';
import { LoginModal } from 'src/login/LoginModal';
import { authenticate } from 'src/service/AuthenticationService';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const authedUser = useContext(AuthenticationContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  const showModal = () => {
    setIsLoginModalOpen(true);
  };

  const onClose = () => {
    setIsLoginModalOpen(false);
  };
  /**
   * Redirects to the SSO login page to obtain the authorization token.
   * @param provider authorization provider
   */
  async function login(provider: string) {
    setLoggingIn(true);
    // Obtain the URL to the SSO authentication page and redirect to it
    try {
      await authenticate(`/sso/auth?provider=${provider}`);
      // Store the temporary request token and use it after the redirect to obtain an authentication token
    } catch (e) {
      message.error('login failed');
      setLoggingIn(false);
    }
  }

  const handleOpenChange = async (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const settingsMenuContent = () => (
    <div className="settings-menu-container">
      <div className="top-container">
        {authedUser.authenticationState !== 2 ? (
          <>
            <div className="menu-item" onClick={showModal}>
              Sign up
            </div>
            <div className="menu-item" onClick={showModal}>
              Login
            </div>
          </>
        ) : (
          <>
            <div className="menu-item">{`Welcome ${authedUser.userDetails.user_name}`}</div>
            <div className="menu-item">Profile</div>
            <div className="menu-item">Settings</div>
          </>
        )}
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
            {authedUser.authenticationState === 2 ? (
              <img className="user-logo" src={authedUser?.userDetails?.picture} />
            ) : (
              <ProfileIconSvg />
            )}
          </div>
        </div>
      </Popover>
      <LoginModal isOpen={isLoginModalOpen} onClose={onClose} onLogin={login} />
    </div>
  );
};

export default Navbar;

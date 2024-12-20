import React from 'react';

// const  Login = ()=> {
//     return <div><a href="http://localhost:8080/oauth2/authorization/1">Login</a></div>
// }

// export default Login
// import { useTranslator } from 'src/core/i18nConfig';
// import Logo from '../assets/iqnect-logo.svg';
import './Login.css';
import { Button, Input } from 'antd';
import { NavbarLogo } from 'src/core/assets/Icons';

/**
 * Properties for the login component.
 */
export interface LoginProps {
  /**
   * Invoked when the sign in button is pressed. Must start the authentication
   * flow.
   */
  onLogin(provider: string): void;

  /**
   * When set to `true`, a loading indicator is displayed over the login form.
   */
  loggingIn?: boolean;
}

/**
 * A component that renders a login screen with a single "sign in with SSO" button.
 * @param props         Component props.
 */
export function Login(props: LoginProps) {
  return (
    <div className="login">
      <div className="login-panel" {...{ inert: props.loggingIn ? '' : undefined }}>
        <NavbarLogo />
        <h3 className="login-title">Login or Sign up</h3>
        <div className="divider"></div>
        <span className="welcome-msg">Welcome to BnbClone</span>
        <Input placeholder="Email" size="large" style={{ padding: 14 }} />
        <Button size="large" type="primary" style={{ width: '100%', padding: 23, marginTop: '24px' }}>
          Continue
        </Button>
        <div className="divider-overlapse">
          <div className="divider"></div>
          <div>Or</div>
        </div>
        {/* <button className="button large main-button" onClick={() => props.onLogin('auth0')}>
          Sign in with SSO
        </button> */}
        <Button
          size="large"
          type="default"
          style={{ width: '100%', padding: 23 }}
          onClick={() => props.onLogin('google')}
        >
          Sign in with Google
        </Button>
      </div>
      <div className={`form-loading-indicator ${props.loggingIn ? 'loading' : ''}`} />
    </div>
  );
}

import { NavbarLogo } from 'src/core/assets/Icons';
import './Login.css';
import { Button, Input } from 'antd';
import { LoginProps } from './Login';

export function LoginModal(props: LoginProps) {
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

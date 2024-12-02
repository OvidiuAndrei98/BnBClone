import { NavbarLogo } from 'src/core/assets/Icons';
import './Login.css';
import { Button, Input, Modal } from 'antd';
import { LoginProps } from './Login';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal(props: LoginProps & LoginModalProps) {
  return (
    <Modal className="login-modal" onCancel={props.onClose} maskClosable={true} open={props.isOpen} footer={() => ''}>
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
    </Modal>
  );
}

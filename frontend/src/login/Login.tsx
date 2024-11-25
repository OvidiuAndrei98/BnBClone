import React from "react"

// const  Login = ()=> {
//     return <div><a href="http://localhost:8080/oauth2/authorization/1">Login</a></div>
// }

// export default Login
// import { useTranslator } from 'src/core/i18nConfig';
// import Logo from '../assets/iqnect-logo.svg';
import './Login.css';

/**
 * Properties for the login component.
 */
interface LoginProps {
    /**
     * Invoked when the sign in button is pressed. Must start the authentication
     * flow.
     */
    onLogin(): void;

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
                {/* <img src={Logo} className="login-logo" /> */}
                <h3 className="login-title">Sign in</h3>
                <button className="button large main-button"  onClick={props.onLogin}>
                    Sign in with SSO
                </button>
            </div>
            <div className={`form-loading-indicator ${props.loggingIn ? 'loading' : ''}`} />
        </div>
    );
}

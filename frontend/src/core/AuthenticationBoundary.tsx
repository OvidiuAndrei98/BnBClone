// import { Skeleton } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import { Login } from '../login/Login.tsx';
import { authenticate } from '../service/AuthenticationService.ts';
// import { Client } from './client/Client';
// import { DisplayAlert } from './utilities/Alert';

/**
 * Contains constants which describe the authentication state of the current session.
 */
enum AuthenticationState {
    /**
     * Indicates that the authentication state has not been determined yet.
     */
    Unknown,

    /**
     * Indicates that the current session is not authenticated.
     */
    Unauthenticated,

    /**
     * Indicates that the current session is authenticated.
     */
    Authenticated,
}

/**
 * A context that contains information about the currently authenticated user.
 */
export const AuthenticationContext = React.createContext({
    authenticationState: AuthenticationState.Unknown,
    userDetails: {} as TokenValues,
});

/**
 * The local storage key under which the authentication token is stored.
 */
const AuthenticationTokenKey = 'auth_token';

/**
 * Describes the values of the decoded IQNECT token. Used for validating whether
 * a token is still valid before performing a request.
 */
interface TokenValues {
    /**
     * The timestamp when this token will expire, in seconds.
     */
    expiration: number;

    /**
     * The timestamp when this token was issued, in seconds.
     */
    iat: number;

    /**
     * The email address of the user for which the token was issued.
     */
    email: string;

    /**
     * The ID of the system for which the token was issued.
     */
    system_id: string;

    /**
     * The ID of the tenant to which the user belongs.
     */
    tenant_id: string;

    /**
     * The ID of the user for which the token was issued.
     */
    user_id: string;

    /**
     * The name of the user for which the token was issued.
     */
    user_name: string;

    loggedIn:boolean;

    // TODO: To be completed after decoding a token
}

/**
 * Decodes the specified JWT token into a JSON object.
 * @param token         The token to decode.
 * @returns             An object containing the token's properties and values, if it could
 *                      be decoded, `undefined` otherwise.
 */
function DecodeJWT(token: string): TokenValues | undefined {
    // NOTE: Code from https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
    try {
        const base64URL = token.split('.')[1];
        const base64Content = base64URL.replace(/-/g, '+').replace(/_/g, '/');
        const JSONPayload = decodeURIComponent(
            window
                .atob(base64Content)
                .split('')
                .map(function (c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join(''),
        );

        return JSON.parse(JSONPayload) as TokenValues;
    } catch (e) {
        console.error(`Could not decode token.`, e);
    }
}

/**
 * A component that validates that there is an active session before rendering
 * its child elements.
 * If an active session exists, the child elements are rendered. Otherwise a login
 * screen is rendered instead.
 * @param props         The component properties.
 * @returns             A react element.
 */
export function AuthenticationBoundary(props: { children?: ReactNode }) {
    const [authenticationState, setAuthenticationState] = useState(AuthenticationState.Unknown);
    // const [token, setToken] = useState('');
    const [token, setToken] = useState<{loggedIn:boolean, expiration: Date}>();
    const [tokenValues, setTokenValues] = useState<TokenValues>();

    // Displays a loading indicator while a login request is in progress
    const [isLoggingIn, setLoggingIn] = useState(false);

    useEffect(() => {
        // let token: string | undefined | null;
        let token: {loggedIn:boolean, expiration: Date} | undefined;
            try {
                const tkn = localStorage.getItem(AuthenticationTokenKey)
                token = tkn ? JSON.parse(tkn) : undefined;
            } catch (e) {
                // Assume the token is not set if an error occurs while reading
                // the local storage (e.g. safari private mode)
                console.error(`Could not read the token from local storage. `, e);
            }
        

        if (token) {
            // If the token is set, set it, which triggers an effect that verifies it
            setToken(token);
        } else {
            // Otherwise assume not authenticated
            setAuthenticationState(AuthenticationState.Unauthenticated);
        }
    }, []);

    useEffect(() => {
        // When the token changes, parse it and verify its validity
        if (token) {
            // const tokenValues = DecodeJWT(token);
            if (token) {
                setTokenValues(token as unknown as TokenValues);
                const  dif =Date.now() -  new Date(token.expiration).getTime() 
               const  thrtMins = Math.round(( dif/ 1000) / 60);
                if ( +thrtMins <= 0) {
                    // If the token is valid, set the authentication state as authenticated
                    setAuthenticationState(AuthenticationState.Authenticated);

                    try {
                        localStorage.setItem('auth_token', JSON.stringify(token));
                    } catch (e) {
                        console.error('Could not persist authorization token.', e);
                        // If the token can't be stored, just log an error; the current session
                        // will work, but the user will be asked to reauthenticate when reloading
                    }
                } else {
                    // Otherwise require users to log in again
                    setAuthenticationState(AuthenticationState.Unauthenticated);
                }
            }
        }
    }, [token]);

    /**
     * Redirects to the SSO login page to obtain the authorization token.
     */
    async function login() {
        setLoggingIn(true);
        // Obtain the URL to the SSO authentication page and redirect to it
        try {
            const token = JSON.parse(JSON.stringify(await authenticate('/sso/auth')));
            setToken(token)
            // Store the temporary request token and use it after the redirect to obtain an authentication token
           
        } catch (e) {
           alert('login failed')
            setLoggingIn(false);
        }
    }

    switch (authenticationState) {
        case AuthenticationState.Unknown:
        default:
            // return <Skeleton />;
        case AuthenticationState.Unauthenticated:
            return <Login onLogin={login} loggingIn={isLoggingIn} />;
        case AuthenticationState.Authenticated:
            // For authenticated contexts, just render the children normally
            return (
                <AuthenticationContext.Provider
                    value={{
                        authenticationState,
                        // NOTE: When state is authenticated, tokenValues is non-null
                        userDetails: tokenValues!,
                    }}
                >
                    {props.children ?? null}
                </AuthenticationContext.Provider>
            );
    }
}

import { auth } from '../firebase/firebase';
import { useAuthState, useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';
import { ReactComponent as GoogleIcon } from '../assets/svg/google-icon.svg';
import Button from '../components/Button'
import './Login.css';
import DisplayError from '../components/DisplayError';

const Login = () => {
    const [loggedUser] = useAuthState(auth)
    // eslint-disable-next-line no-unused-vars
    const [signInWithGoogle, googleUser, loadingSignInWithGoogle, signInWithGoogleError] = useSignInWithGoogle(auth);
    const [signOut, loadingSignOut, signOutError] = useSignOut(auth);
    return (
        <div className="login-page-container">
            <h1>Ingreso</h1>
            <div className="login-page-text">
                <p>Para poder acceder a diferentes contenidos exclusivos, separados por categoría, debes ingresar con una cuenta de google.</p>
            </div>
            <div className="login-page-button-container">
                {
                    loggedUser ? (
                        <>
                            <div className="login-page-logged-user">
                                Ingresaste como:
                                <img height={50} src={loggedUser.photoURL} alt="user avatar" />
                                <span>{loggedUser.displayName}</span>
                            </div>
                            <Button onClick={() => signOut()} disabled={loadingSignOut}>
                                Salir
                            </Button>
                            {
                                (signInWithGoogleError || signOutError) && (
                                    <DisplayError>
                                        {signInWithGoogleError || signOutError}
                                    </DisplayError>
                                )
                            }
                        </>
                    ) : (
                        <Button onClick={() => signInWithGoogle()} disabled={loadingSignInWithGoogle}>
                            <div className="login-button-style">
                                <GoogleIcon height={50} /> Ingresá con Google
                            </div>
                        </Button>
                    )
                }
            </div>
        </div>
    );
};

export default Login;

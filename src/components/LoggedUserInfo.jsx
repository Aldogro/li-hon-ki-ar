import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc, firestore } from '../firebase/firebase';
import { categories, roles } from '../information';
import '../pages/Login.css';

const LoggedUserInfo = ({ loggedUser }) => {
    const [loggedUserInfo] = useDocumentData(
        doc(firestore, 'users', loggedUser?.uid),
    );

    return (
        <>
            <div className="login-page-logged-user">
                Ingresaste como:
                <img height={50} src={loggedUser.photoURL} alt="user avatar" />
                <span>{loggedUser.displayName}</span>
            </div>
            {
                loggedUserInfo?.role || loggedUserInfo?.category ? (
                    <div>
                        <b>{roles[loggedUserInfo?.role]}</b> - {categories[loggedUserInfo?.category]}
                    </div>
                ) : (
                    <div>Pronto se te asignarán tu categoría y tu rol para poder acceder a contenidos específicos.</div>
                )
            }
        </>
    );
};

export default LoggedUserInfo;

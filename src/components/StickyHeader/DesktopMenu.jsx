import './StickyHeader.css'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { contactLinks, links } from './helper'
import { auth } from '../../firebase/firebase'

const DesktopMenu = () => {
    const [loggedUser] = useAuthState(auth)
    const admins = process.env.REACT_APP_ADMINS

    return (
        <div className="desktop-menu">
            <div className="contact-info">
                {contactLinks.map((contact) => (
                    <a
                        className="contact-item"
                        href={contact.url}
                        key={contact.url}
                    >
                        {contact.content}
                    </a>
                ))}
            </div>
            <div className="sections">
                {links.map((link) => (
                    <div className="link-item" key={link.path}>
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>
            <div className="sections">
                {
                    loggedUser && (
                        <>
                            {
                                admins?.split(',').includes(loggedUser.email) && (
                                    <div className="link-item">
                                        <Link to="/usuarios">Usuarios</Link>
                                    </div>
                                )
                            }
                            <div className="link-item">
                                <Link to="/ingreso">Mi Perfil</Link>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default DesktopMenu;

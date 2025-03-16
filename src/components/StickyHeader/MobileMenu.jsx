import { useState } from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'

import { Link } from 'react-router-dom'
import { contactLinks, links } from './helper'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import logo from '../../assets/png/li-hon-ki-logo-200.png'
import './StickyHeader.css'

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    const [loggedUser] = useAuthState(auth)
    const admins = process.env.REACT_APP_ADMINS

    return (
        open ? (
            <div className="mobile-menu-open">
                <div className="close-icon">
                    <CloseIcon height={30} width={30} onClick={() => setOpen(!open)} />
                </div>
                <div className="mobile-sections">
                    {links.map((link) => (
                        <div className="link-item" key={link.name}>
                            <Link to={link.path} onClick={() => setOpen(false)}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                    {
                        loggedUser && (
                            <>
                                {
                                    admins?.split(',').includes(loggedUser.email) && (
                                        <div className="link-item">
                                            <Link to="/usuarios" onClick={() => setOpen(false)}>
                                                Usuarios
                                            </Link>
                                        </div>
                                    )
                                }
                                <div className="link-item">
                                    <Link to="/ingreso" onClick={() => setOpen(false)}>
                                        Mi Perfil
                                    </Link>
                                </div>
                            </>
                        )
                    }
                </div>
                <img className="mobile-menu-logo" src={logo} alt="logo" />
                <div className="mobile-menu-footer">
                    {contactLinks.map((contact) => (
                        <a
                            key={contact.url}
                            className="contact-item"
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.content}
                        </a>
                    ))}
                </div>
            </div>
        ) : (
            <MenuIcon height={30} width={30} onClick={() => setOpen(!open)} />
        )
    );
};

export default MobileMenu;

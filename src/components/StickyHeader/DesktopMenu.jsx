import { ReactComponent as MembersIcon } from '../../assets/svg/users.svg';
import './StickyHeader.css';
import { Link } from 'react-router-dom';
import { contactLinks, links } from './helper';

const DesktopMenu = () => {
    return (
        <div className="desktop-menu">
            <div className="contact-info">
                {contactLinks.map((contact) => (
                    <a
                        className="contact-item"
                        href={contact.url}
                    >
                        {contact.content}
                    </a>
                ))}
                <div className="contact-item">
                    <MembersIcon height={30} width={30} />
                </div>
            </div>
            <div className="sections">
                {links.map((link) => (
                    <div className="link-item" key={link.path}>
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesktopMenu;

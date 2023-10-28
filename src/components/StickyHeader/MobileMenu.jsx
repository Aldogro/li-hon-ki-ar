import { useState } from 'react';
import { ReactComponent as LocationPinIcon } from '../../assets/svg/location-pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import logo from '../../assets/png/li-hon-ki-logo-200.png';
import './StickyHeader.css';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        open ? (
            <div className="mobile-menu-open">
                <div className="close-icon">
                    <CloseIcon height={30} width={30} onClick={() => setOpen(!open)} />
                </div>
                <div className="mobile-sections">
                    <div className="link-item">Hung Gar</div>
                    <div className="link-item">Wing Chun</div>
                    <div className="link-item">Sanda</div>
                    <div className="link-item">Funcional</div>
                    <div className="link-item">Instructores</div>
                    <div className="link-item">Horarios</div>
                </div>
                <img className="mobile-menu-logo" src={logo} alt="logo" />
                <div className="mobile-menu-footer">
                    <div className="contact-item">
                        Laprida 2907 - Rosario - Santa Fe <LocationPinIcon height={30} width={30} />
                    </div>
                    <div className="contact-item">
                        0341 569-7429 <PhoneIcon height={30} width={30} />
                    </div>
                    <div className="contact-item">
                        <InstagramIcon height={30} width={30} />
                    </div>
                    <div className="contact-item">
                        <FacebookIcon height={30} width={30} />
                    </div>
                </div>
            </div>
        ) : (
            <MenuIcon height={30} width={30} onClick={() => setOpen(!open)} />
        )
    );
};

export default MobileMenu;

import { ReactComponent as LocationPinIcon } from '../../assets/svg/location-pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as MembersIcon } from '../../assets/svg/users.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import './StickyHeader.css';

const DesktopMenu = () => {
    return (
        <div className="desktop-menu">
            <div className="contact-info">
                <div className="contact-item">
                    <LocationPinIcon height={30} width={30} /> Laprida 2907 - Rosario - Santa Fe
                </div>
                <div className="contact-item">
                    <PhoneIcon height={30} width={30} /> 0341 569-7429
                </div>
                <div className="contact-item">
                    <InstagramIcon height={30} width={30} />
                </div>
                <div className="contact-item">
                    <FacebookIcon height={30} width={30} />
                </div>
                <div className="contact-item">
                    <MembersIcon height={30} width={30} />
                </div>
            </div>
            <div className="sections">
                <div className="link-item">Hung Gar</div>
                <div className="link-item">Wing Chun</div>
                <div className="link-item">Sanda</div>
                <div className="link-item">Funcional</div>
                <div className="link-item">Instructores</div>
                <div className="link-item">Horarios</div>
            </div>
        </div>
    );
};

export default DesktopMenu;

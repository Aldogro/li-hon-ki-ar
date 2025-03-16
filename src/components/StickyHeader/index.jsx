import { useEffect, useState } from 'react';
import logo100 from '../../assets/png/li-hon-ki-logo-horizontal1.png';
import MobileMenu from './MobileMenu';
import './StickyHeader.css';
import DesktopMenu from './DesktopMenu';

const StickyHeader = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setScrolled(window.scrollY > 10)
          );
        }
      }, []);
    return (
        <div className={`sticky-header ${scrolled && 'scrolled'}`}>
            <div className={`container ${scrolled && 'scrolled'}`}>
                <div className={`logo ${scrolled && 'scrolled'}`}>
                    <img src={logo100} height={80} alt="logo at 100px" />
                </div>
                <div className={`action-buttons mobile ${scrolled && 'scrolled'}`}>
                    <MobileMenu />
                </div>
                <div className={`action-buttons desktop ${scrolled && 'scrolled'}`}>
                    <DesktopMenu />
                </div>
            </div>
        </div>
    );
};

export default StickyHeader;

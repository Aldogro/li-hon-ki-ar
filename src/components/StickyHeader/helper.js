import { ReactComponent as LocationPinIcon } from '../../assets/svg/location-pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';

export const links = [
    {
        path: '/',
        name: 'Inicio',
    },
    {
        path: '/hung-gar',
        name: 'Hung Gar',
    },
    {
        path: '/wing-chun',
        name: 'Wing Chun',
    },
    // {
    //     path: '/sanda',
    //     name: 'Sanda'
    // },
    {
        path: '/funcional',
        name: 'Funcional'
    },
    {
        path: '/filiales',
        name: 'Filiales',
    },
    {
        path: '/instructores',
        name: 'Instructores',
    },
    // {
    //     path: '/horarios',
    //     name: 'Horarios',
    // },
];

export const contactLinks = [
    {
        url: 'https://maps.app.goo.gl/SfGUKLKDmwpFB1Gm6',
        content: (
            <>
                Laprida 2907 - Rosario - Santa Fe <LocationPinIcon height={30} width={30} />
            </>
        )
    },
    {
        url: 'https://api.whatsapp.com/send?phone=543415697429&text=Hola%20quiero%20informaci%C3%B3n%20acerca%20del%20instituto',
        content: (
            <>
                +54 341 569 7429 <PhoneIcon height={30} width={30} />
            </>
        )
    },
    {
        url: 'https://instagram.com/instituto_lihonki_arg?igshid=NzZlODBkYWE4Ng==',
        content: <InstagramIcon height={30} width={30} />
    },
    {
        url: 'https://www.facebook.com/InstitutoLiHonKi.ar',
        content: <FacebookIcon height={30} width={30} />
    }
];
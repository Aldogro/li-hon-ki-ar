import CommonContainer from '../components/CommonContainer';
import './FilialesPage.css';

const FilialesPage = () => {
    const filiales = [
        {
            name: 'Kwoon Central',
            address: 'Laprida 2907 - Rosario - Santa Fe',
            addressLink: 'https://maps.app.goo.gl/WAuqRqqVbcR9MvRFA',
            activities: 'Hung Gar - Wing Chun - Sanda - Funcional',
            director: 'Sifu Fabián González',
        },
        {
            name: 'Filial La Plata, Bs. As.',
            address: 'Club S y D San Martín, Calle 119 entre 530 y 531 Tolosa',
            addressLink: 'https://maps.app.goo.gl/o4X1RapUCv5rTGTU6',
            activities: 'Hung Gar',
            director: 'Instructor Ignacio Bruvera',
        },
        {
            name: 'Filial Comarca Andina - El Hoyo',
            address: 'Corfo El Hoyo - Chubut',
            addressLink: 'https://maps.app.goo.gl/UHhPPsScdT2NYgvdA',
            activities: 'Hung Gar - Chi Kung - Defensa Personal',
            director: 'Profesor Nahuel Campanari'
        },
        {
            name: 'Filial Rosario (Zona Sur)',
            address: 'España 4588 esquina Coulin (Espacio Iluminarte)',
            addressLink: 'https://maps.app.goo.gl/LnCNpjvtTTTSVqQWA',
            activities: 'Hung Gar',
            director: 'Instructor José Luis Cristaldo Bustamante'
        },
    ]
    return (
        <CommonContainer>
            <h1>Filiales</h1>
            <div className="filiales-container">
                {filiales.map((filial) => (
                    <div className="filial-card" key={filial.name}>
                            <h3>{filial.name}</h3>
                            <h4>{filial.activities}</h4>
                            <a href={filial.addressLink} target="_blank" rel="noopener noreferrer">
                                <h4>{filial.address}</h4>
                            </a>
                            <h4>Director: {filial.director}</h4>
                        </div>
                ))}
            </div>
        </CommonContainer>
    );
};

export default FilialesPage;

import CommonContainer from '../components/CommonContainer';
import './FilialesPage.css';

const FilialesPage = () => {
    const filiales = [
        {
            name: 'Kwoon Central',
            address: 'Laprida 2907 - Rosario - Santa Fe',
            director: 'Sifu Fabián González',
        },
        {
            name: 'Filial La Plata',
            address: 'Dirección - La Plata - Buenos Aires',
            director: 'Nahuel'
        },
        {
            name: 'Filial Rosario',
            address: 'Dirección - Rosario - Santa Fe',
            director: 'José Luis Cristaldo Bustamente',
        }
    ]
    return (
        <CommonContainer>
            <h1>Filiales</h1>
            <div className="filiales-container">
                {filiales.map((filial) => (
                    <div className="filial-card" key={filial.name}>
                        <h3>{filial.name}</h3>
                        <h4>{filial.address}</h4>
                        <h4>Director: {filial.director}</h4>
                    </div>
                ))}
            </div>
        </CommonContainer>
    );
};

export default FilialesPage;

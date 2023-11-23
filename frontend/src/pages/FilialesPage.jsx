import { Link } from 'react-router-dom';
import CommonContainer from '../components/CommonContainer';
import { filiales } from '../information';
import './FilialesPage.css';

const FilialesPage = () => {
    return (
        <CommonContainer>
            <h1>Filiales</h1>
            <div className="filiales-container">
                {filiales.map((filial) => (
                    <Link to={`/filiales/${filial.filialId}`}>
                        <div className="filial-card" key={filial.name}>
                            <h3>{filial.name}</h3>
                            <h4>{filial.activities}</h4>
                            <a href={filial.addressLink} target="_blank" rel="noopener noreferrer">
                                <h4>{filial.address}</h4>
                            </a>
                            <h4>Director: {filial.director}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </CommonContainer>
    );
};

export default FilialesPage;

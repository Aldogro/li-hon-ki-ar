import { Link, useParams } from 'react-router-dom';
import { schedules, filiales } from '../information';
import './FilialPage.css';
import CommonContainer from '../components/CommonContainer';
import TableComponent from '../components/TableComponent';

const FilialPage = () => {
    const { filialId } = useParams();
    const filial = filiales.find((filial) => filial.filialId === filialId);

    return (
        <CommonContainer>
            <div className="filial-page">
                <h1 className="filial-name">{filial.name}</h1>
                <h3 className="filial-address">{filial.address}</h3>
                <Link className="filial-director" to={`/instructores/${filial.instructorId}`}>
                    {filial.director}
                </Link>
                <TableComponent schedule={schedules[filial.filialId]} />
            </div>
        </CommonContainer>
    );
};

export default FilialPage;

import { useParams } from 'react-router-dom';
import { instructores } from '../information';
import CommonContainer from '../components/CommonContainer';
import { Link } from 'react-router-dom';
import './InstructorPage.css';

const InstructorPage = () => {
    const { instructorId } = useParams();
    const instructor = instructores.find((instructor) => instructor.instructorId === instructorId);

    return (
        <CommonContainer id="top">
            <div className="instructor-container">
                <div className="instructor-photo">
                    <img src={instructor.photo} alt="instructor portrait" />
                </div>
                <h2 className="instructor-name">{instructor.name}</h2>
                {instructor.places.map((place) => (
                    <Link key={place.filialId} to={`/filiales/${place.filialId}`}>
                        <h3 className="instructor-place">{place.name}</h3>
                    </Link>
                ))}
                <p className="instructor-bio" dangerouslySetInnerHTML={{ __html: instructor.bio }}></p>
            </div>
        </CommonContainer>
    );
};

export default InstructorPage;

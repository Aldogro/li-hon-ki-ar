import { useParams } from 'react-router-dom';
import { instructores } from '../information';
import CommonContainer from '../components/CommonContainer';
import './InstructorPage.css';

const InstructorPage = () => {
    const { instructorId } = useParams();
    const instructor = instructores.find((instructor) => instructor.instructorId === instructorId);

    return (
        <CommonContainer>
            <div className="instructor-container">
                <div className="instructor-photo">
                    <img src={instructor.photo} alt="instructor portrait" />
                </div>
                <h2 className="instructor-name">{instructor.name}</h2>
                <h3 className="instructor-place">{instructor.place}</h3>
                <p className="instructor-bio" dangerouslySetInnerHTML={{ __html: instructor.bio }}></p>
            </div>
        </CommonContainer>
    );
};

export default InstructorPage;

import { Link } from 'react-router-dom';
import CommonContainer from '../components/CommonContainer';
import './InstructoresPage.css';
import { activities, instructores } from '../information';

const InstructorCard = ({ instructor }) => {
    const getActivityName = (activity) => {
        return activities.find((a) => a.activityId === activity.activityId).name;
    };

    return (
        <Link to={`/instructores/${instructor.instructorId}`}>
            <div className="instructor-card">
                <div className="instructor-card-photo">
                    <img src={instructor.photo} alt={instructor.name} />
                </div>
                <div>
                    <h3>{instructor.name}</h3>
                    {instructor.places.map((place) => (
                        <h4 key={place.name}>{place.name}</h4>
                    ))}
                    <div className="instructor-activities">
                        {instructor.activities.map((activity) => (
                            <span key={activity.activityId}>{getActivityName(activity)}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

const InstructoresPage = () => {
    return (
        <CommonContainer>
            <h1>Instructores</h1>
            <div className="instructores-container">
                {instructores.map((instructor) => (
                    <InstructorCard instructor={instructor} key={instructor.name} />
                ))}
            </div>
        </CommonContainer>
    );
};

export default InstructoresPage;

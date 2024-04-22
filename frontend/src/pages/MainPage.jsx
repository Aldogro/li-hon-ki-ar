import './MainPage.css';
import CommonContainer from '../components/CommonContainer';
import CommonCard from '../components/CommonCard';
import { activities, filiales, instructores } from '../information';

const MainPage = () => {
    return (
        <CommonContainer>
            <div className="full-width-section">
                <div className="school-banner-container">
                    <h1>Instituto Li Hon Ki</h1>
                </div>
            </div>
            <div className="main-section first">
                <h2>Actividades</h2>
                <div className="main-section__card-container">
                    {activities.map((activity) => (
                        <CommonCard key={activity.name} name={activity.name} to={`/${activity.activityId}`} />
                    ))}
                </div>
            </div>
            <div className="separator"></div>
            <div className="main-section">
                <h2>Filiales</h2>
                <div className="main-section__card-container">
                    {filiales.map((filial) => (
                        <CommonCard key={filial.name} name={filial.name} to={`/filiales/${filial.filialId}`} />
                    ))}
                </div>
            </div>
            <div className="separator"></div>
            <div className="main-section">
                <h2>Profesores e Instructores</h2>
                <div className="main-section__card-container">
                    {instructores.map((instructor) => (
                        <CommonCard key={instructor.name} name={instructor.name} to={`/instructores/${instructor.instructorId}#top`} />
                    ))}
                </div>
            </div>
        </CommonContainer>
    );
};

export default MainPage;

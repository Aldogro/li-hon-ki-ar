import './MainPage.css';
import CommonContainer from '../components/CommonContainer';
import CommonCard from '../components/CommonCard';
import { activities, filiales, instructores } from '../information';
import CircledImage from '../components/CircledImage';

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
                <div className="main-section__card-container col3">
                    {activities.map((activity) => (
                        <CommonCard
                            key={activity.name}
                            name={activity.name}
                            to={`/${activity.activityId}`}
                            avatar={<activity.logo/>}
                        />
                    ))}
                </div>
            </div>
            <div className="separator"></div>
            <div className="main-section">
                <h2>Profesores e Instructores</h2>
                <div className="main-section__card-container col3">
                    {instructores.map((instructor) => (
                        <CommonCard
                            key={instructor.name}
                            name={instructor.name}
                            to={`/instructores/${instructor.instructorId}#top`}
                            avatar={<CircledImage photo={instructor.photo} />}
                        />
                    ))}
                </div>
            </div>
            <div className="separator"></div>
            <div className="main-section">
                <h2>Filiales</h2>
                <div className="main-section__card-container">
                    {filiales.map((filial) => (
                        <CommonCard
                            key={filial.name}
                            name={filial.name}
                            to={`/filiales/${filial.filialId}`}
                        />
                    ))}
                </div>
            </div>
        </CommonContainer>
    );
};

export default MainPage;

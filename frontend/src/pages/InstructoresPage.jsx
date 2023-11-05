import CommonContainer from '../components/CommonContainer';
import empty from '../assets/webp/img-placeholder.webp';
import './InstructoresPage.css';

const InstructorCard = ({ instructor }) => {
    return (
        <div className="instructor-card">
            <img src={instructor.photo} alt={instructor.name} />
            <div>
                <h3>{instructor.name}</h3>
                <h4>{instructor.place}</h4>
                <h5>{instructor.activities}</h5>
            </div>
        </div>
    );
};

const InstructoresPage = () => {
    const instructores = [
        {
            name: 'Maximiliano Gómez',
            photo: empty,
            place: 'Kwoon Central',
            activities: 'Sanda'
        },
        {
            name: 'Instructor Wally',
            photo: empty,
            place: 'Kwoon Central',
            activities: 'Hung Gar',
        },
        {
            name: 'Instructor José Luis Cristaldo Bustamante',
            photo: empty,
            place: 'Kwoon Central - Otro Lugar',
            activities: 'Hung Gar',
        },
        {
            name: 'Instructor Nahuel',
            photo: empty,
            place: 'La Plata - La Patagonia',
            activities: 'Hung Gar',
        },
    ];

    return (
        <CommonContainer>
            <h1>Instructores</h1>
            <div className="instructores-container">
                <InstructorCard instructor={{
                    name: 'Sifu Fabián González',
                    photo: empty,
                    place: 'Kwoon Central',
                    activities: 'Hung Gar - Wing Chun',
                }} />
                {instructores.map((instructor) => (
                    <InstructorCard instructor={instructor} />
                ))}
            </div>
        </CommonContainer>
    );
};

export default InstructoresPage;

import logo from '../assets/png/li-hon-ki-logo.png';
import './UnderConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="under-construction">
            <img src={logo} height="400" alt="school-logo" />
            <h1>En construcción...</h1>
        </div>
    );
};

export default UnderConstruction;

import './LoadingComponent.css';
import logo from '../assets/png/li-hon-ki-logo-300.png';

const LoadingComponent = () => {
    return (
        <div className="loading-component">
            <img src={logo} height="150" alt="logo" />
            <div className="loading-component-spinner"></div>
            <b>Cargando</b>
        </div>
    );
};

export default LoadingComponent;

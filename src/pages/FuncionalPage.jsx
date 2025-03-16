import CommonContainer from '../components/CommonContainer';
import './MainPage.css';
import './FuncionalPage.css';

const FuncionalPage = () => {
    return (
        <CommonContainer>
            <div className="full-width-section">
                <div className="school-banner-container">
                    <h1>
                        Entrenamiento
                        <br/>
                        Funcional
                    </h1>
                </div>
            </div>
            <div className="main-section first">
                <h3>Qué es el entrenamiento funcional</h3>
                <p>
                    El entrenamiento funcional es un tipo de ejercicio que se enfoca en mejorar
                    la capacidad del cuerpo para realizar movimientos y actividades cotidianas de manera
                    eficiente y segura.
                </p>
                <p>
                    Este tipo de entrenamiento se basa en ejercicios que imitan patrones de movimiento naturales,
                    como levantar, empujar, tirar, agacharse y girar, trabajando múltiples grupos musculares al mismo tiempo.
                </p>
                <p>
                    El objetivo es desarrollar fuerza, estabilidad, flexibilidad y coordinación,
                    lo que ayuda a mejorar el rendimiento físico en la vida diaria y en actividades deportivas.
                </p>
            </div>
        </CommonContainer>
    );
};

export default FuncionalPage;

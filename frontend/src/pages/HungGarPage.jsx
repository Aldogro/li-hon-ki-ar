import './HungGarPage.css';
import CommonContainer from '../components/CommonContainer'

const HungGarPage = () => {
    const animals = [
        'TIGRE: Fortalece huesos, músculos y tendones.',
        'DRAGON: Perfecciona el CHI a través de la respiración.',
        'LEOPARDO: Desenvuelve los reflejos y la velocidad.',
        'SERPIENTE: Utiliza posiciones bajas.',
        'GRULLA: Utiliza saltos, patadas, equilibrio y puños largos.',
    ]

    const elements = [
        'ORO: Controla la energía hacia abajo.',
        'MADERA: Controla la fuerza circular.',
        'AGUA:Controla la energía hacia arriba.',
        'FUEGO: Controla la energía en forma recta hacia delante y atrás.',
        'TIERRA:Controla la energía hacia la derecha y hacia la izquierda.',
    ]

    return (
        <CommonContainer>
            <div className="full-width-section">
                <div className="school-banner-container">
                    <h1>Hung Gar</h1>
                </div>
            </div>
            <div className="main-section first">
                <h3>Características del estilo</h3>
                <p>
                    El estilo HUNG GAR es muy conocido como estilo de tigre,
                    pero el tigre es solo uno de sus componentes. El HUNG GAR posee
                    diez subestilos incorporados, cada cual responsable por un atributo debido a ejercicios
                    específicos. Ejemplo:
                </p>
                <br/>
                <p><b>Correspondientes a animales:</b></p>
                <ul>
                    {animals.map((animal, index) => (
                        <li key={animal[0] + animal[0] + animal[0] + index}>
                            {animal}
                        </li>
                    ))}
                </ul>
                <br/>
                <p>Correspondientes a los elementos de la naturaleza</p>
                <ul>
                    {elements.map((element, index) => (
                        <li key={element[0] + element[0] + element[0] + index}>
                            {element}
                        </li>
                    ))}
                </ul>

                <p>
                    Los animales desarollan las habilidades y los elementos controlan las direcciones
                    en que pueden ser conducidas las energías y fuerzas del combate.
                </p>

                <h3>
                    ¿Qué es Hung Gar? Su orígen
                </h3>
                <p>
                    El Hung Ga Kuen (洪家拳), Hung Gar (洪家) es un sistema de arte marcial china que surgió en el siglo XVIII.
                </p>
                <p>
                    El famoso Templo Shaolin, la cuna de artes marciales chinas con un milenario de historia, seguía dedicando su fuerza en el desarrollo de las artes luego de haber huido hacía la Prov. Fukien (Fujian, 福建) de la primera persecución de la Dinastía Ching (Qing).  Hacia el fin del 1700 la dinastía Qing decidió también destruir el segundo monasterio.
                </p>
                <p>
                    La leyenda cuenta que entre los revolucionarios anti-Qing que habían sido protegidos y tomados como discípulos por los monjes, estuvieron Lok Ah Choy(陸亞采) y Hung Hei Kun (洪熙官), quienes a su vez continuó transmitiendo estas técnicas. La escuela del primero luego tomó el nombre Hung Gar (洪家).
                </p>
                <p>
                    Entre los discípulos importantes fueron Wong Tai y su hijo después de esto, Wong Kay Ying(黄麒英), quién luego buscó discípulos directos de Hung Hei Kun para profundizar su aprendizaje. La fama de Yin Wong Kay sólo fue superado por su propio hijo, Wong Fei Hung (黄飛鴻).  La fama de Wong Fei Hung fue reportado en numerosas películas e incluso hoy en día, es un héroe patriota importante de la población china. 
                </p>
                <p>
                    El sistema Hung Gar está formado por cinco técnicas principales: Dragón, Serpiente, Tigre, Leopardo, y Grulla. También se caracteriza por utilizar técnicas de defensa simples, con una base de piernas muy fuertes, destacandose el uso de técnicas de manos (palmas, garras, y puño) con relación a las piernas. 
                </p>
                <p>
                    Su característica principal es la utilización del ataque y defensa al mísmo tiempo. El Hung Gar es uno de los mejores estilos que engloba el aspecto interno del "Kung Fu" tradicional practicado en el Templo Shaolin siendo un arte de gran belleza caracterizado además por el uso de numerosas armas tradicionales, de ahí la razón por la cual ejerce tanta atracción sobre el público.
                </p>
            </div>
        </CommonContainer>
    );
};

export default HungGarPage;

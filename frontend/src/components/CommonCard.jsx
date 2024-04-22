import { Link } from 'react-router-dom';
import './CommonCard.css'

const CommonCard = ({ name, to }) => {
    return (
        <Link to={to}>
            <div className="common-card__container">{name}</div>
        </Link>
    )
};

export default CommonCard;

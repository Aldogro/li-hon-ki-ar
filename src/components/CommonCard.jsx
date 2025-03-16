import { Link } from 'react-router-dom';
import './CommonCard.css'
import Avatar from './Avatar';

const CommonCard = ({ name, to, avatar }) => {
    return (
        <Link to={to}>
            <div className="common-card__container">
                <div className="common-card__title">{name}</div>
                {avatar && (
                    <Avatar>
                        {avatar}
                    </Avatar>
                )}
            </div>
        </Link>
    )
};

export default CommonCard;

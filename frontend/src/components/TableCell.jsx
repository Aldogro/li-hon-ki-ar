import { Link } from 'react-router-dom';
import './TableCell.css';

const TableCell = ({ today }) => {
    if (today) {
        return (
            <td>
                <Link to={`/${today.type}`}>
                    <div className={`table-cell ${today.type}`}>
                            <div className="cell-wrapper">
                                <span className="name">{today.name}</span>
                                <span className="hours">{today.timeIn} a {today.timeOut}</span>
                            </div>
                    </div>
                </Link>
            </td>
        )
    }
    return <td></td>
};

export default TableCell;

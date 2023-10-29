import './TableCell.css';

const TableCell = ({ today }) => {
    if (today) {
        return (
            <td className="table-cell">
                <span className="name">{today.name}</span><br/>
                <span className="hours">{today.timeIn} a {today.timeOut}</span>
            </td>
        )
    }
    return <td></td>
};

export default TableCell;

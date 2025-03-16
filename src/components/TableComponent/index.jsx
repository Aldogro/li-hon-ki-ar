import TableCell from './TableCell';
import { days } from '../../pages/helper';
import './HorariosPage.css';

const TableComponent = ({ schedule }) => {
    const getSchedule = () => {
        const scheduleGroupedByHour = {}
        schedule.forEach((item) => {
            if (scheduleGroupedByHour[item.timeIn]) {
                scheduleGroupedByHour[item.timeIn] = [...scheduleGroupedByHour[item.timeIn], item]
            } else {
                scheduleGroupedByHour[item.timeIn] = [item]
            }
        })
        return scheduleGroupedByHour;
    };
    
    const parsedSchedule = getSchedule();
    return (
        schedule.length ? (
            <div className="horarios-container">
                <table>
                    <thead className="table-header">
                        <tr>
                            {days.map((day) => (
                                <th key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(parsedSchedule).sort().map((key) => (
                            <tr key={key}>
                                {days.map((day) => {
                                    const today = parsedSchedule[key].find((practice) => practice.day === day);
                                    return <TableCell key={`${today}${day}`} today={today} />
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <div className="horarios-container-soon">
                <h3>Pronto publicaremos los horarios</h3>
            </div>
        )
    );
};

export default TableComponent;

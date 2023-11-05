import CommonContainer from '../components/CommonContainer';
import TableCell from '../components/TableCell';
import { days, schedule } from './helper';
import './HorariosPage.css';

const HorariosPage = () => {
    
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
        <CommonContainer>
            <h1>Horarios</h1>
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
                            <tr key={parsedSchedule[key]}>
                                {days.map((day) => {
                                    const today = parsedSchedule[key].find((practice) => practice.day === day);
                                    return <TableCell key={`${today}${day}`} today={today} />
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CommonContainer>
    );
};

export default HorariosPage;

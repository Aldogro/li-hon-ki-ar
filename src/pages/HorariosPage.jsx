import CommonContainer from '../components/CommonContainer';
import TableCell from '../components/TableCell';
import { days, hungGarKidsSchedule, hungGarSchedule } from './helper';
import './HorariosPage.css';

const HorariosPage = () => {
    return (
        <CommonContainer>
            <table>
                <tr className="table-header">
                    {days.map((day) => (
                        <th>{day}</th>
                    ))}
                </tr>
                <tr>
                    {days.map((day) => {
                        const today = hungGarKidsSchedule.find((practice) => practice.day === day);
                        return <TableCell today={today} />
                    })}
                </tr>
                <tr>
                    {days.map((day) => {
                        const today = hungGarSchedule.find((practice) => practice.day === day);
                        return <TableCell today={today} />
                    })}
                </tr>
            </table>
        </CommonContainer>
    );
};

export default HorariosPage;

import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

function Timetable() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    // State to store the timetable data
    const [timetableData, setTimetableData] = useState([]);

    // Fetch timetable data from the provided JSON API
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Perkitw2/033dda386da1d254f345d95f2dd2c467/raw/621ef33b4ead46d3780d1a6536b2bc6188eb82ae/StudentInformation.json')
            .then((response) => response.json())
            .then((data) => {
                setTimetableData(data.timetable);
            })
            .catch((error) => console.error(error));
    }, []);

    // Function to check if a cell has a class
    const hasClass = (dayData, time) => {
        return dayData.classes.some((classData) => classData.time === time);
    };

    // Function to render the timetable
    const renderTimetable = () => {
        if (timetableData.length === 0) {
            return <div>Loading...</div>;
        }
    
        const daysOfWeek = timetableData.map((dayData) => dayData.day);
        let uniqueTimes = Array.from(
            new Set(
                timetableData.flatMap((dayData) =>
                    dayData.classes.map((classData) => classData.time)
                )
            )
        );
    
        // Sort the times in ascending order
        uniqueTimes = uniqueTimes.sort((a, b) => {
            const timeA = a.split(' ')[0];
            const timeB = b.split(' ')[0];
            return new Date('1970/01/01 ' + timeA) - new Date('1970/01/01 ' + timeB);
        });
    
        return (
            <table className={`${classes.table} ${isMobile ? classes.mobileTable : ''}`}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th className={classes.cell}></th>
                        {daysOfWeek.map((day, dayIndex) => (
                            <th
                                key={dayIndex}
                                className={`${classes.cell} ${isMobile ? classes.mobileCell : ''}`}
                            >
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {uniqueTimes.map((time, timeIndex) => (
                        <tr key={timeIndex}>
                            <td className={`${classes.cell} ${isMobile ? classes.mobileCell : ''}`}>
                                {time}
                            </td>
                            {timetableData.map((dayData, dayIndex) => (
                                <td
                                    key={dayIndex}
                                    className={`${classes.cell} ${isMobile ? classes.mobileCell : ''} ${
                                        hasClass(dayData, time) ? classes.highlightedCell : ''
                                    }`}
                                >
                                    {hasClass(dayData, time)
                                        ? `${dayData.classes.find((classData) => classData.time === time).subject} (${dayData.classes.find((classData) => classData.time === time).room})`
                                        : ''}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className={classes.timetable}>
            <h2>Weekly Timetable</h2>
            {renderTimetable()}
        </div>
    );
}

const useStyles = makeStyles({
    timetable: {
        textAlign: 'center',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
    },
    mobileTable: {
        border: '1px solid #ddd',
        marginBottom: '20px',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
    },
    cell: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
    },
    mobileCell: {
        padding: '6px',
    },
    highlightedCell: {
        backgroundColor: 'lightblue',
    },
});

export default Timetable;

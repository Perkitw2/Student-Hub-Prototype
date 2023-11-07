import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import roomOptions from '../assets/roomList';

function RoomAvailability() {
    const classes = useStyles();

    const [selectedRoom, setSelectedRoom] = useState('Room 1');

    const handleRoomChange = (event) => {
        setSelectedRoom(event.target.value);
    };

    const timetableData = [
        {
            day: 'Monday',
            schedule: ['9:00 AM - 10:30 AM', '11:00 AM - 12:30 PM', '2:00 PM - 3:30 PM'],
        },
        {
            day: 'Tuesday',
            schedule: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM', '3:00 PM - 4:30 PM'],
        },
        {
            day: 'Wednesday',
            schedule: ['8:30 AM - 10:00 AM', '10:30 AM - 12:00 PM', '1:30 PM - 3:00 PM'],
        },
        {
            day: 'Thursday',
            schedule: ['9:30 AM - 11:00 AM', '11:30 AM - 1:00 PM', '2:30 PM - 4:00 PM'],
        },
        {
            day: 'Friday',
            schedule: ['9:00 AM - 10:30 AM', '11:00 AM - 12:30 PM', '2:00 PM - 3:30 PM'],
        },
        {
            day: 'Saturday',
            schedule: ['10:00 AM - 11:30 AM', '1:00 PM - 2:30 PM', '3:00 PM - 4:30 PM'],
        },
        {
            day: 'Sunday',
            schedule: ['11:00 AM - 12:30 PM', '1:30 PM - 3:00 PM', '4:00 PM - 5:30 PM'],
        },
    ];

    // Extract unique times from the schedule data
    const uniqueTimes = [...new Set(timetableData.flatMap((dayData) => dayData.schedule))];

    // Filter timetableData based on the selected room
    const filteredTimetableData = timetableData.map((dayData) => ({
        day: dayData.day,
        schedule: dayData.schedule.map((time) =>
            selectedRoom === 'Room 1' ? time : 'Not Available'
        ),
    }));

    return (
        <div className={classes.roomAvailability}>
            <h2>Room Availability</h2>
            <div className={classes.roomSelect}>
                <label>Select Room:</label>
                <select value={selectedRoom} onChange={handleRoomChange}>
                    {roomOptions.map((room, index) => (
                        <option key={index} value={room}>
                            {room}
                        </option>
                    ))}
                </select>
            </div>
            <table className={classes.table}>
                <thead className={classes.tableHeader}>
                    <tr>
                        <th className={classes.cell}></th>
                        {filteredTimetableData.map((dayData, index) => (
                            <th key={index} className={classes.cell}>
                                {dayData.day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {uniqueTimes.map((time, timeIndex) => (
                        <tr key={timeIndex}>
                            <td className={classes.cell}>{time}</td>
                            {filteredTimetableData.map((dayData, dayIndex) => (
                                <td key={dayIndex} className={classes.cell}>
                                    {dayData.schedule.includes(time) ? 'Available' : 'Not Available'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const useStyles = makeStyles({
    roomAvailability: {
        textAlign: 'center',
    },
    roomSelect: {
        margin: '20px 0',
    },
    formControl: {
        width: '100%',
    },
    select: {
        width: '100%',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
    },
    cell: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
    },
});

export default RoomAvailability;

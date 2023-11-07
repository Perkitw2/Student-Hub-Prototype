import { useState } from 'react';
import Timetable from './Timetable';
import RoomAvailability from './RoomAvailability';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        padding: '20px',
        marginRight: '20px',
    },
    tabsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ccc',
        marginBottom: '10px',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        gap:'5px',
    },
    tab: {
        cursor: 'pointer',
        padding: '10px 20px',
        border: '1px solid transparent',
        transition: 'border-color 0.3s',
        borderColor: 'rgb(24, 49, 33)',
        borderRadius: '10px 10px 0 0',
    },
    activeTab: {
        backgroundColor: 'rgb(24, 49, 33)',
        borderRadius: '10px 10px 0 0',
        color: 'white',
    },
    tabContent: {
        flex: 1,
    },
});

const TabContainer = () => {
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState('timetable'); // Set 'timetable' as the default tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={classes.tabContainer}>
            <div className={classes.tabsHeader}>
                <div className={classes.tabs}>
                    <div
                        className={`${classes.tab} ${activeTab === 'timetable' ? classes.activeTab : ''}`}
                        onClick={() => handleTabChange('timetable')}
                    >
                        Timetable
                    </div>
                    <div
                        className={`${classes.tab} ${activeTab === 'roomAvailability' ? classes.activeTab : ''}`}
                        onClick={() => handleTabChange('roomAvailability')}
                    >
                        Room Availability
                    </div>
                    <div
                        className={`${classes.tab} ${activeTab === 'news' ? classes.activeTab : ''}`}
                        onClick={() => handleTabChange('news')}
                    >
                        News
                    </div>
                    <div
                        className={`${classes.tab} ${activeTab === 'notices' ? classes.activeTab : ''}`}
                        onClick={() => handleTabChange('notices')}
                    >
                        Notices
                    </div>
                </div>
            </div>
            <div className={classes.tabContent}>
                {activeTab === 'timetable' && <Timetable />}
                {activeTab === 'roomAvailability' && <RoomAvailability />}
            </div>
        </div>
    );
};

export default TabContainer;

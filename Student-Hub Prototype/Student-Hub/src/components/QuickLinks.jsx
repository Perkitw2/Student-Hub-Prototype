import { makeStyles } from '@mui/styles';

const QuickLinks = () => {
    const classes = useStyles();
    return (
        <div className={classes.quickLinks}>
            <div className={classes.welcome}>
                <h2>Kāpehu</h2>
                <p>Tēnā koe i tēnei ahiahi, Tyler</p>
            </div>
            <ul className={classes.links}>
                <li className={classes.linkItem}>
                    <a
                        href="https://outlook.office365.com/owa/calendar/bookingsstudentsuccess@op.ac.nz/bookings/"
                        target="_blank"
                        rel="noopener"
                        className={classes.anchor}
                    >
                        <div className={classes.image}>
                            <img
                                src="src/assets/image.svg"
                                alt="Get Support"
                                width="44"
                                height="44"
                            />
                        </div>
                        <span>GET SUPPORT</span>
                    </a>
                </li>
                <li className={classes.linkItem}>
                    <a
                        href="https://studentsupport.op.ac.nz/library/"
                        target="_blank"
                        rel="noopener"
                        className={classes.anchor}
                    >
                        <div className={classes.image}>
                            <img
                                src="src/assets/image2.svg"
                                alt="Library"
                                width="44"
                                height="44"
                            />
                        </div>
                        <span>LIBRARY</span>
                    </a>
                </li>
                <li className={classes.linkItem}>
                    <a
                        href="https://moodle.op.ac.nz/my/"
                        target="_blank"
                        rel="noopener"
                        className={classes.anchor}
                    >
                        <div className={classes.image}>
                            <img
                                src="src/assets/moodle.png"
                                alt="Moodle"
                                width="44"
                                height="44"
                            />
                        </div>
                        <span>MOODLE</span>
                    </a>
                </li>
                <li className={classes.linkItem}>
                    <a
                        href="https://teams.op.ac.nz/"
                        target="_blank"
                        rel="noopener"
                        className={classes.anchor}
                    >
                        <div className={classes.image}>
                            <img
                                src="src/assets/teams.png"
                                alt="Teams"
                                width="44"
                                height="44"
                            />
                        </div>
                        <span>TEAMS</span>
                    </a>
                </li>
                <li className={classes.linkItem}>
                    <a
                        href="https://teams.op.ac.nz/"
                        target="_blank"
                        rel="noopener"
                        className={classes.anchor}
                    >
                        <div className={classes.image}>
                            <img
                                src="src/assets/onedrive.png"
                                alt="One Drive"
                                width="44"
                                height="44"
                            />
                        </div>
                        <span>ONE DRIVE</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

const useStyles = makeStyles({
    quickLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        paddingRight: '20px',
        marginRight: '20px',
        
        // Responsive styles
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
    welcome: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: '0px',
        paddingLeft: '20px',
        '& p': {
            margin: '0',
        },
        '& h2': {
            marginBottom: '0',
        },
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        marginRight: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        
        // Responsive styles
        '@media (max-width: 768px)': {
            flexDirection: 'column',
        },
    },
    linkItem: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    anchor: {
        textDecoration: 'none',
        color: 'black',
    },
    image: {
        marginBottom: '8px',
    },
});

export default QuickLinks;

import { makeStyles } from '@mui/styles';


const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div>
                <div>
                    <div>
                        <a href="https://xn--tepkenga-szb.ac.nz/" target="_blank">
                            <img
                                className={classes.logo}
                                src="/resources/themes/op/images/tepukenga_footer/tepukenga.png?m=1698278538"
                                alt="Te Pūkenga Logo"
                            />
                        </a>
                    </div>
                    <div>
                        Otago Polytechnic is part of Te Pūkenga - New Zealand Institute of Skills and Technology{' '}
                        <a href="https://www.op.ac.nz/about-us/te-pukenga" target="_blank" className={classes.links}>
                            Learn more
                        </a>
                    </div>
                </div>
                <div></div>
                <div>
                    <div>
                        <div>
                            <strong className={classes.learnWithPurpose}>Learn with purpose</strong>
                        </div>
                        <div>
                            <a href="https://xn--tepkenga-szb.ac.nz/programme/search" target="_blank" className={classes.links}>
                                Explore Te Pūkenga
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="https://xn--tepkenga-szb.ac.nz/about-us/" target="_blank" className={classes.links}>
                                About Te Pūkenga
                            </a>
                            <a href="https://tepūkenga.ac.nz/privacy-notice" target="_blank" className={classes.links}>
                                Privacy Notice
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="https://www.govt.nz/" target="_blank">
                        <img
                            src="../assets/nzgovt-logo-white.svg"
                            alt="New Zealand Government Logo"
                        />
                    </a>
                </div>
                <div className={classes.copyright}>Copyright © 2023 Otago Polytechnic</div>
            </div>
        </div>
    );
};


const useStyles = makeStyles({
    footerContainer: {
        background: 'rgb(24, 49, 33)',
        color: 'white',
        padding: '20px',
    },
    logo: {
        width: '100px',
        height: 'auto',
    },
    learnWithPurpose: {
        fontWeight: 'bold',
    },
    links: {
        textDecoration: 'none',
        color: 'white',
        marginRight: '10px',
    },
    copyright: {
        textAlign: 'center',
    },
});

export default Footer;

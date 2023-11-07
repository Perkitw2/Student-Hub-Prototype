import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const useStyles = makeStyles({
    navbar: {
        background: 'rgb(24, 49, 33)',
        height: '75px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
    },
    navbarList: {
        display: 'flex',
        listStyle: 'none',
        height: '100%',
        padding: 0,
        margin: 0,
        gap: '30px'
    },
    navbarItem: {
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        transition: 'background 0.3s',
        height: "100%",
        color: 'white',
        textDecoration: 'none',
        '& a': {
            color: 'white',
            textDecoration: 'none',
            padding: '10px 50px 10px 50px',
        },
        '&:hover': {
            background: 'rgb(24, 49, 33)',
            '& $submenu': {
                display: 'flex',
            },
        },
    },
    submenu: {
        display: 'none',
        position: 'absolute',
        paddingTop: '20px',
        listStyle: 'none',
        background: 'grey',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1,
        minWidth: '75vw',
        top: '75px', // Adjust this value as needed
        left: '-40vw', // Adjust this value as needed
    },
    submenuColumn: {
        listStyle: 'none',
        minWidth: '20%',
    },
    submenuTitle: {
        fontWeight: 'bold',
        background: 'none',
        fontSize: 'larger',
    },
    submenuItem: {
        padding: '10px',
        transition: 'background 0.3s',
        '&:hover': {
            background: 'lightgray',
        },
    },
});


function Navbar({ onSearchClick }) {
    const classes = useStyles();
    const [isSearchFormVisible, setSearchFormVisibility] = useState(false);

    const toggleSearchForm = () => {
        setSearchFormVisibility(!isSearchFormVisible);
        onSearchClick(); // Call the prop function to update the App component's state.
    };


    return (
        <div className={classes.navbar}>
            <ul className={classes.navbarList}>
                <li className={classes.navbarItem}>
                    <a href="https://kapehu.op.ac.nz">Kāpehu home</a>
                </li>
                <li className={classes.navbarItem}>
                    <a href="https://kapehu.op.ac.nz/hub/student/kapehu-dunedin/tools/">Tools</a>
                </li>
                <li className={classes.navbarItem}>
                    <a href="https://studentsupport.op.ac.nz/">Support services</a>
                    <div className={classes.submenu}>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuTitle}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2918">Learners/Ākonga</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2918">Auckland-based</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2919">Central Otago-based</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/international/">International</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/akonga-maori/">Māori</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/learning-online-toolbox/">Online/distance</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/pasifika-learners/">Pasifika</a>
                            </li>
                            <li className={classes.submenuTitle}>
                                <a href="/hub/student/kapehu-dunedin/schools-and-departments/wellbeing-and-safety/">Wellbeing and Safety</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/schools-and-departments/wellbeing-and-safety/record-in-vault/">Record a hazard/incident</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/schools-and-departments/wellbeing-and-safety/induction-and-training/">Induction and training</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/schools-and-departments/wellbeing-and-safety/in-an-emergency/">In an emergency</a>
                            </li>
                        </ul>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuTitle}>
                                <a href="https://studentsupport.op.ac.nz/">Support</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/">Student Support Te Ama Tauira website</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/health-and-wellbeing/accessibility-services/">Accessibility/neurodiversity</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/learning-support/assistive-technology/">Assistive technology</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/career-counseling/">Careers</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2818">Chaplains</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2817">Counselling</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/it-support/">IT Support</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/learning-support/">Learning support</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a4754">Peer tutor</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/queer-support/">Queer support</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/home/student-success/#a2811">Student advisors</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.xn--tepkenga-szb.ac.nz/te-pae-ora">Wellbeing hub - Te Pae Ora</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/health-and-wellbeing/">Wellbeing support</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/wellbeing-toolbox/">Wellbeing Toolbox - Kia Kaha</a>
                            </li>
                        </ul>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuTitle}>
                                <a href="https://studentsupport.op.ac.nz/">Other services</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/wellbeing-toolbox/budget-toolbox/">Budgeting</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/staying-safe/">Campus Watch</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/community-services-card/">Community Services Card</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://opsa.org.nz/support/grants-and-hardship/">Grants and hardship</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/services/justice-of-the-peace/">Justices of the Peace</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/low-sensory-room/">Low Sensory Room</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/manaaki-fund/">Manaaki Fund</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.opsa.org.nz/">OPSA</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/parents-room/">Parents' Room</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/services/polykids/">Polykids</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/explore/scholarships/scholarships-current-students/">Scholarships</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/health-and-wellbeing/health-and-wellbeing-contacts/#a2738">Student Health</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://opsa.org.nz/services/student-insurance/">Student insurance</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://studentsupport.op.ac.nz/getting-started/studylink/">Studylink</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://opsa.org.nz/services/unipol-gym-and-recreation-centre/">Unipol</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/staying-safe/">Tips for staying safe</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/support/study-abroad/">Study Abroad</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={classes.navbarItem}>
                    <a href="https://www.op.ac.nz/about/">About Us</a>
                    <div className={classes.submenu}>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuTitle}>
                                <a href="https://www.op.ac.nz/about/">About</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/covid-19//">Covid-19</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/our-team/">Our Team</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/careers/">Careers at Otago Polytechnic</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/contact-us/">Contact Us</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/locations/">Locations</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/news/">News</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/sustainability/">Sustainability</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/the-edge/">The Edge</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.op.ac.nz/about/the-foundation/">The Foundation</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={classes.navbarItem}>
                    <a href="/hub/student/kapehu-dunedin/contact-us/get-in-touch/">Contact Us</a>
                    <div className={classes.submenu}>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/contact-us/get-in-touch/">Get in touch (all contact details)</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://otagopolytechnic.au1.qualtrics.com/jfe/form/SV_eyQxyOdbthAVBTn" target="_blank" rel="noopener">Compliment or complaint?</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="/hub/student/kapehu-dunedin/contact-us/in-an-emergency/">In an emergency</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://forms.clickup.com/2704196/f/2jgu4-23682/VQH9J2KTDEKLSMTA7R" target="_blank" rel="noopener">Feedback about Kāpehu</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://forms.clickup.com/2704196/f/2jgu4-24702/788DMJN5HC7DEY9OMJ" target="_blank" rel="noopener">Request new content for Kāpehu</a>
                            </li>
                        </ul>
                        <ul className={classes.submenuColumn}>
                            <li className={classes.submenuTitle}>
                                Social Media:
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="http://www.facebook.com/OtagoPoly" target="_blank" rel="noopener">Facebook</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.linkedin.com/company/213448" target="_blank" rel="noopener">LinkedIn</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="http://www.youtube.com/user/OtagoPolytech" target="_blank" rel="noopener">YouTube</a>
                            </li>
                            <li className={classes.submenuItem}>
                                <a href="https://www.instagram.com/otagopolytechnic/" target="_blank" rel="noopener">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={classes.navbarItem}>
                    <a onClick={toggleSearchForm}><SearchIcon /></a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;

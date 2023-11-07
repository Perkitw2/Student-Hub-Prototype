import { makeStyles } from '@mui/styles';

function Profile() {
  const classes = useStyles();

  return (
    <aside className={classes.aside}>
      <div className={classes.profileContainer}>
        <div className={classes.profilePicture}>
          <img
            src="src/assets/MemberProfilePicture.jpg"
            alt="Profile Picture"
            className={classes.circularImage}
          />
        </div>
        <p className={classes.studentName}>Tyler Perkins</p>
        <p className={classes.studentId}>Student ID: 71673433</p>
        <div className={classes.emailButton}>
          <span className={classes.envelopeIcon}></span>
          <span>Emails</span>
        </div>
      </div>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <a href="https://kapehu.op.ac.nz/hub/details#Results" className={classes.navLink}>
            Results and awards (Ngā māka me ngā tohu)
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="https://kapehu.op.ac.nz/hub/details#Financials" className={classes.navLink}>
            Financials (Ahumoni)
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="https://kapehu.op.ac.nz/hub/details#Enrolment" className={classes.navLink}>
            Enrolment (Whakaurunga)
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="https://kapehu.op.ac.nz/hub/details#Documents" className={classes.navLink}>
            Documents (Ngā tuhinga)
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="/Security/logout" className={classes.navLink}>
            Logout (Takiputa)
          </a>
        </li>
      </ul>
    </aside>
  );
}

const useStyles = makeStyles({
  aside: {
    background: '#f0f0f0',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  profileContainer: {
    textAlign: 'center',
    marginBottom: '16px',
  },
  profilePicture: {
    display: 'flex',
    justifyContent: 'center',
  },
  circularImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  studentName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  studentId: {
    fontSize: '1rem',
  },
  emailButton: {
    backgroundColor: '#007bff', // Change to your desired button style
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none', // Remove the underline on hover
    display: 'inline-block',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    margin: '8px 0',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Profile;
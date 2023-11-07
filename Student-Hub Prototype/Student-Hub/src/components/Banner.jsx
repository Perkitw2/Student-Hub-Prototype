import { makeStyles } from '@mui/styles';
import campusImage from '../assets/campusOP.jpg'; // Import the image

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
    </div>
  );
}

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${campusImage})`, // Set the background image
    backgroundSize: 'cover', // Adjust the background image size
    backgroundPosition: 'center', // Center the background image
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});

export default Banner;

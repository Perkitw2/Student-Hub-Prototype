import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'redaxios';

function Aside() {
  const classes = useStyles();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch the data from the provided URL
    axios.get('https://gist.githubusercontent.com/Perkitw2/033dda386da1d254f345d95f2dd2c467/raw/c45dfb96fdbe35e03f6758c33a8205d6bc770504/StudentInformation.json')
      .then(response => {
        // Extract assignments from the JSON data
        const data = response.data;
        const { assignments } = data;
        setAssignments(assignments);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <aside className={classes.aside}>
      <section>
        <h2>Upcoming Assignments</h2>
        <div className={classes.assignmentsBox}>
          <ul className={classes.assignmentsList}>
            {assignments.map((assignment, index) => (
              <li key={index} className={classes.assignmentItem}>
                <a href="#" className={classes.deadlineTitle}>{assignment.subject}</a>
                <span className={classes.deadlineDescription}>{assignment.description}</span>
                <span className={classes.deadlineDate}>{assignment.deadline}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
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

    '& h2': {
      fontSize: '1.2rem',
      marginBottom: '8px',
    },
  },
  assignmentsBox: {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '12px',
  },
  assignmentsList: {
    listStyle: 'none',
    padding: 0,
  },
  assignmentItem: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #ddd',
    padding: '8px 0',
  },

  deadlineTitle: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  deadlineDescription: {
    fontSize: '14px',
    color: '#333',
  },
  deadlineDate: {
    color: '#888',
    fontSize: '12px',
  },
  '@media (max-width: 600px)': {
    deadlineTitle: {
      fontSize: '12px',
    },
    deadlineDate: {
      fontSize: '10px',
    },
  },
});

export default Aside;

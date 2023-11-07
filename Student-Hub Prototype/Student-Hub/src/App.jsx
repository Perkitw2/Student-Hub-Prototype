import { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Profile from './components/Profile';
import TabContainer from './components/TabContainer';
import Footer from './components/Footer';
import SearchForm from '../src/components/SearchForm';
import QuickLinks from './components/QuickLinks';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  aside: {
    flex: 0.3,
    marginRight: '20px',
    '@media (max-width: 768px)': {
      flex: 'auto',
      marginRight: '0',
    },
  },
  centerContainer: {
    flex: 0.9,
  },
});

function App() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('aside');
  const [isSearchFormVisible, setSearchFormVisibility] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleSearchForm = () => {
    setSearchFormVisibility(!isSearchFormVisible);
  };

  return (
    <div>
      <Banner />
      <Navbar onSearchClick={toggleSearchForm} />
      {isSearchFormVisible && <SearchForm />}
      <div className={classes.appContainer}>
        <div className={classes.aside}>
          <Profile />
        </div>
        <div className={classes.centerContainer}>
          <QuickLinks />
          <TabContainer activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
        <div className={classes.aside}>
          <Aside />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

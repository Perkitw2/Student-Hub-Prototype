import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    searchForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: 'rgb(33,99,49)',
        color: 'white',
        width: '100%',
        zIndex: "1",
        height: "300px",
        textDecoration: 'none',
    },

    form: {
        textAlign: "center",
    },

    label: {
        display: 'block',
        margin: '10px 0',
        fontSize: '16px',
        color: 'white',
    },

    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white)',
        color: 'white',
        fontSize: '16px',
        transition: 'background-color 0.3s',
        '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
    },

    subtitle: {
        borderBottom: '1px solid transparent',
        borderColor: 'white',
    },

    linkList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft:'0px',
        gap: '20px',
    },

    link: {
        border: '1px solid transparent',
        transition: 'border-color 0.3s',
        borderColor: 'white',
        borderRadius: '10px 10px 10px 10px',
        padding: '10px',
        '& a': {
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
        },
    }
});

function SearchForm() {
    const classes = useStyles();

    return (
        <div id="searchForm" className={classes.searchForm}>
            <form
                id="Form_SearchForm"
                className={classes.form}
                action="/search-results/3"
                method="GET"
                encType="application/x-www-form-urlencoded"
                role="search"
            >
                <h2>Search the Otago Polytechnic website</h2>
                <label htmlFor="SearchForm_SearchForm_Search" className={classes.label}>
                    Enter keyword(s)
                </label>
                <input
                    id="SearchForm_SearchForm_Search"
                    type="search"
                    name="Search"
                    value=""
                    placeholder="Search for a keyword"
                    className={classes.input}
                />
                <div>
                    <h3 className={classes.subtitle}>Quick links</h3>
                </div>
                <ul className={classes.linkList}>
                    <li className={classes.link}>
                        <a href="/students/campuses/">Our campuses</a>
                    </li>
                    <li className={classes.link}>
                        <a href="/about-us/contact-us/">Contact us</a>
                    </li>
                    <li className={classes.link}>
                        <a href="/apply">
                            <strong>Tono mai ki te ako</strong>
                            <span className="subtitle">Apply to study</span>
                        </a>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default SearchForm;

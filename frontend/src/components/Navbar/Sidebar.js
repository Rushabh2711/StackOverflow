import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import PublicIcon from "@mui/icons-material/Public";
import { height } from "@mui/system";
import { Divider } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
    },
    "& .publicTab": {
      fontSize: "11px",
      textTransform: "capitalize",
      color: "#6A737C",
      marginTop: "5px",
    },
    "& .normalTab": {
      fontSize: "13px",
      color: "#525960",
      textTransform: "none",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      alignItems: "flex-start",
      fontFamily:
        '"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      minHeight: "0px",
      height: "33px",
      justifyContent: "flex-start",
      // textAlign: "left"
    },

    "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
      color: "#0C0D0E",
      fontWeight: "bold",
    },
    "& .nav-links .nav-links--link:hover": {
      color: "#0C0D0E",
    },
  },
  publicTab: {
    fontSize: "50px",
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.tabValue);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    props.setComponent(newValue);
    // this.props.history.push('/tags');
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        justifyContent: "flex-end",
      }}
    >
      <Tabs
        id="sidebar"
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 0, borderColor: "divider", width: "150px" }}
        className={classes.tabs}
      >
        <Tab label="Home" value={0} className="normalTab" {...a11yProps(0)} />

        <Tab
          label="PUBLIC"
          value={1}
          className="publicTab"
          {...a11yProps(4)}
          disabled
        />
        <Tab
          label="Question"
          value={2}
          className="normalTab"
          icon={<PublicIcon />}
          iconPosition="start"
          {...a11yProps(1)}
        />
        <Tab
          label="Tags"
          value={3}
          className="normalTab"
          icon={<PublicIcon style={{ visibility: "hidden" }} />}
          iconPosition="start"
          {...a11yProps(2)}
        />
        <Tab
          label="Users"
          value={4}
          className="normalTab"
          icon={<PublicIcon style={{ visibility: "hidden" }} />}
          iconPosition="start"
          {...a11yProps(3)}
        />
      </Tabs>
      {/* <Divider flexItem orientation="vertical"/> */}
    </Box>
  );
}

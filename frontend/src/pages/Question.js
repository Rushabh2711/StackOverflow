import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';

const drawerWidth = 240;

export default function LandingPage() {
    let navigate = useNavigate();
    
    const handleOnClick = (event) => {
        
        navigate("/question");
    }
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline />
      <Navbar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginLeft: "10%" },
          marginLeft:"24px"
        }}
       
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Sidebar />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ padding:"24px 10%"}}>
        <Toolbar />
        your component goes here */}
    
      <p style={{ position:"relative", width:"inherit", textAlign: "left"}}>
        Rushabh Shetaausfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbddfsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddsssssssssssssssssssfsdfsefefdsfvxdvcszdfwadeadfzdfsdefawfsef
        <br />
        <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              style={{
                borderRadius: "0px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
              sx={{
                mr: 2,
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
              onClick={handleOnClick}
            >
              I am question
            </IconButton>
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        v vv v
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        vvv
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        v vv v
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        vvv
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        v vv v
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        vvv
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
        safdgsdgusfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbd
        <br />
      </p>
      {/* </Box> */}
    </Box>
  );
}
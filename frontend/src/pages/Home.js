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
import axios from 'axios';

const drawerWidth = 240;

export default function Home() {

    console.log(document.getElementById("sidebar"));

  React.useEffect(() => {
    axios.get("http://localhost:3001/getQuestions").then((response) => {
      console.log(response);
    });
    var search = "[java] user:12345 \"text\" is:question isaccepted:yes";
    axios.get("http://localhost:3001/search/" + search).then((response) => {
      console.log(response);
    });
  },[]);

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
      HARSH Vaghasutyausfopjadjsbdgoskidabdsgsfbhaifhsfbawdhsdjvbsejdjovsdifhawecnsdvjseabdaojuvsdrifrbddfsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddsssssssssssssssssssfsdfsefefdsfvxdvcszdfwadeadfzdfsdefawfsef
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

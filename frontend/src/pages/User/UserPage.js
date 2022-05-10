import React, {useState, useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserCard from './UserCard';
import UserSearch from './UserSearch';


const theme = createTheme({
    palette: {
      secondary1: {
        main: '#3B4044',
      },
    },
  });

export const UserPage = () => {

    const dummyUsers = [
        {
          "userId": 1001,
          "tagName": "python",
          "score": 25,
          "posts": 366
        },
        {
          "userId": 1002,
          "tagName": "pandas",
          "score": 12,
          "posts": 366
        },
        {
          "userId": 1003,
          "tagName": "dataframe",
          "score": 433,
          "posts": 2313
        },
        {
          "userId": 1004,
          "tagName": "numpy",
          "score": 12,
          "posts": 4
        },
        {
          "userId": 1005,
          "tagName": "list",
          "score": 12,
          "posts": 431
        },
        {
          "userId": 1006,
          "tagName": "python-3.x",
          "score": 543,
          "posts": 1222
        },
        {
          "userId": 1009,
          "tagName": "java",
          "score": 543,
          "posts": 366
        },
        {
          "userId": 1007,
          "tagName": "javascript",
          "score": 25,
          "posts": 366
        }
      ]
    const [users, setUsers] = useState(dummyUsers)
    const [searchText, setSearchText] = useState('') 
    const [popular, setPopular] = useState('')

    useEffect(() =>{
        // fetch('http://localhost:8000/tags')
        //   .then(res => res.json())
        //   .then(data=> setUsers(data))
        }, [])
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        '&:focus':{
        border: '2px blue solid', 
        },
        marginLeft: 0,
        width: '100%',
        border: '2px lightgrey solid',
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgrey'
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        marginLeft: 50 
    }));

  const clickMe = e =>
  {
      setPopular(e)
  }
  return (
    <>

        <h1>Users</h1>
        <div className='rowDiv'>
            <div>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                    placeholder="Filter by User"
                    />
                </Search>
            </div>
            <div>
                <ThemeProvider theme={theme}>
                    <ButtonGroup color='secondary1' variant="outlined" aria-label="outlined button group">
                        <Button onClick={()=>{clickMe("Reputation")}}>Reputation</Button>
                        <Button onClick={()=>{clickMe("NewUsers")}}>NewUsers</Button>
                        <Button onClick={()=>{clickMe("Voters")}}>Voters</Button>
                        <Button onClick={()=>{clickMe("Editors")}}>Editors</Button>
                        <Button onClick={()=>{clickMe("Moderators")}}>Moderators</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </div>
        </div>
        {/* <UserCard/> */}
        <UserSearch users={users} inputText={searchText} popular={popular}/>
    </>
  )
}

export default UserPage
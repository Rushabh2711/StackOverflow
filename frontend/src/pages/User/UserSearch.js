import React from 'react'
import UserCard from './UserCard';
import { Grid } from '@mui/material';

function UserSearch(props) {
    const users = props.users;
    const inputText = props.inputText;
    const popular = props.popular;

    var filteredData = users.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.tagName.toLowerCase().includes(inputText);
            // return el.text.toLowerCase().includes(props.input)
        }
    })

    if(inputText!=="")
    {
        filteredData = filteredData.slice(0,5)
    }

  return (
    <div>
         <Grid container spacing={3} flexGrow={1}> 
      {
        filteredData.map(user =>(
          <Grid item key ={user.userId} xs={3} md={3}>
            <UserCard user={user} />
          </Grid>
        ))
      }
      </Grid>
    </div>
  )
}

export default UserSearch
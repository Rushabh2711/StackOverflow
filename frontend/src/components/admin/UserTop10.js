import React, {useState, useEffect} from 'react'
import UserCard from '../../pages/User/UserCard';
import { Grid } from '@mui/material';

export const UserTop10 = () => {

    const [users, setUsers] = useState([])

        useEffect(() =>{
          fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data=>{ setUsers(data)
              console.log("data",data)
            }).catch((err)=>{
              console.log("data",err)
            })
          }, [])

  return (
    <div>
        <p>Top 10 users with highest reputation</p><br/>

        <Grid container spacing={3} flexGrow={1}> 
            {
            users.sort((a, b) => b.reputation - a.reputation).slice(0,10).map(user =>(
                <Grid item key ={user.userId} xs={3} md={3}>
                <UserCard user={user} />
                </Grid>
            ))
            }
        </Grid>
        <p>Top 10 users with lowest reputation</p><br/>

        <Grid container spacing={3} flexGrow={1}> 
            {
            users.sort((a, b) => a.reputation - b.reputation).slice(0,10).map(user =>(
                <Grid item key ={user.userId} xs={3} md={3}>
                <UserCard user={user} />
                </Grid>
            ))
            }
        </Grid>
    </div>
  )
}

export default UserTop10;
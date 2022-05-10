import React from 'react'
import { Card, CardHeader,CardContent, Typography } from '@mui/material';


export default function TagCard({tags}){
  return (
      
    <div>
        {/* <Layout> */}
        <Card elevation={3}>
        <CardHeader subheader = {tags.name} sx={{display: 'inline-block',backgroundColor: '#E1ECF4',color: '#5183A8',padding: 1,borderRadius: 1.2,fontSize: 13,fontWeight: 'bold', marginTop: 1, marginLeft:1.5}}/>
        <CardContent>
            <Typography variant="body1" color="textSecondary">
                {tags.tag_description}
            </Typography>
            <div style={{display:'flex', justifyContent: 'space-between'}}>

                <Typography variant="body2" sx={{fontWeight: 'bold', fontSize:12, color:'gray'}}>
                {tags.Total_questions_asked} <br></br>Questions
                </Typography>
                
                <Typography variant="body2" sx={{fontWeight: 'bold', fontSize:12, color:'gray'}}>
                {tags.Questions_asked_today} asked today,  
                {tags.Questions_asked_this_week} this week 
                </Typography>

            </div>
            
            
        </CardContent>
        </Card>
        {/* </Layout> */}
    </div>
  )
}
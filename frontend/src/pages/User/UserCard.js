import React from 'react'
import { Link } from 'react-router-dom';

function UserCard(props) {
    const user = props.user
    // const userId = user.userId; 
    const userId = "62763e54bfe0a2faeddf026e"
    const redirectLink = `profile/${userId}`
    const imageURL = `url(https://richhippos.com/wp-content/uploads/2021/12/jhik.jpeg)`
  return (
    <div className='tags-card'>
        <div className='tags-card-media'>
            <div className='tags-image-container' style={{backgroundImage: imageURL, "width": "68px", "height": "68px"}}>
            </div>
        </div>
        <div className='tags-card-content'>
            <Link to={redirectLink} className='tags-customLink'>{user.userName}</Link>
            {/* <p className='tags-margin0 tags-score'>{user.score}</p> */}
            <p className='tags-margin0 tags-score'>{user.location}</p>
            <p className='tags-margin0 tags-posts'>{user.reputation}</p>
            {/* <p className='tags-margin0 tags-posts'>{user.posts}</p> */}
            <a href='#' className='tags-customLink'>{user.tagName}</a>
        </div>
    </div>
  )
}

export default UserCard
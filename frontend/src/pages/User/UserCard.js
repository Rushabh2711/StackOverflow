import React from 'react'
import { Link } from 'react-router-dom';

function UserCard(props) {
    const user = props.user
    // const userId = user.userId; 
    const userId = "62763e54bfe0a2faeddf026e"
    const redirectLink = `profile/${userId}`
    const imageURL = `url(https://richhippos.com/wp-content/uploads/2021/12/jhik.jpeg)`
  return (
    <div className='card'>
        <div className='card-media'>
            <div className='image-container' style={{backgroundImage: imageURL, "width": "68px", "height": "68px"}}>
            </div>
        </div>
        <div className='card-content'>
            <Link to={redirectLink} className='customLink'>{user.userName}</Link>
            {/* <p className='margin0 score'>{user.score}</p> */}
            <p className='margin0 score'>{user.location}</p>
            <p className='margin0 posts'>{user.reputation}</p>
            {/* <p className='margin0 posts'>{user.posts}</p> */}
            <a href='#' className='customLink'>{user.tagName}</a>
        </div>
    </div>
  )
}

export default UserCard
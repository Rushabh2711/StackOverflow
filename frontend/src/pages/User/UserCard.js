import React from 'react'

function UserCard(props) {
    const user = props.user
  return (
    <div className='card'>
        <div className='card-media'>
            <div className='image-container' style={{backgroundImage: "url(https://richhippos.com/wp-content/uploads/2021/12/jhik.jpeg)"}}>
            </div>
        </div>
        <div className='card-content'>
            <a href='#' className='customLink'>{user.userName}</a>
            <p className='margin0 score'>{user.score}</p>
            <p className='margin0 posts'>{user.posts}</p>
            <a href='#' className='customLink'>{user.tagName}</a>
        </div>
    </div>
  )
}

export default UserCard
import React from 'react'

import Engagements from './Engagements'
import './CommentsSection.css'

const CommentsSection = props => {
  return (
    <div className="commentscontainer">
      <Engagements likes={props.likes}/>
      {props.comments.map((item, index) => (
        <p key={index}>
          <span className="handlename">{`${item.username} `}</span>
          {item.text}
        </p>
      ))}
      <p className="timestamp">{props.timestamp}</p>
      <textarea placeholder="Add a comment" wrap="soft" rows="5" />
    </div>
  )
}
export default CommentsSection

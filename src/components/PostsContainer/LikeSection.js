import React, { useState } from 'react';


const LikeSection = props => {
  
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper" onClick= {props.handleLike}>
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likes} likes</p>
</div>
  )
};
// function LikeButton(props) {
//   const {likes} = props;
//   return 
// }


export default LikeSection;

import React, {useState } from 'react';

const LikeSection = props => {
  
  const [likes, setLikes] =useState();
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
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
function LikeButton(props) {
  const {likes} = props;
  return 
}

export default LikeSection;

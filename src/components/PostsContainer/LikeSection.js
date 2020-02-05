import React, { useState } from 'react';

const LikeSection = props => {
  
  const [likes, setLikes] =useState(0);
  const handleLike = () => {
    // props.setLikes(props.likes + 1);
    // alert(`${props.likes + 1}`)
  };
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={handleLike}/>
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
// var heartBtn = document.querySelector(".fa-heart")
// heartBtn.addEventListener('click', () => {
//   alert("yay");
    
// })

export default LikeSection;

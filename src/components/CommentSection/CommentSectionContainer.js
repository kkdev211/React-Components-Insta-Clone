// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log(props.comments)
  // Add state for the comments
  const [comments, setComments] = useState(0);

   return (     
     // {/* map through the comments data and return the Comment component */}
    <div> 
      {props.comments.map((comment, index) => {
        return <Comment comment={comment}/>
      })}
      <CommentInput/>
    </div>
   
   );
};

export default CommentSection;

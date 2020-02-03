// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(0);

   return (     
     // {/* map through the comments data and return the Comment component */}
    <div className = "comment">
      {props.comments.map((comment, index) => {
         <div className = "user">
           {comment.username} 

         </div>     
      
      })}
      <CommentInput/>
    </div>
   );
};

export default CommentSection;

//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log(props.postsData);
  return (
    <div className="posts-container-wrapper">
      {props.postsData.map((post, index) => {
         
         return <Post postData={post}/>
          
        })}

    </div>
  );
};

export default PostsPage;


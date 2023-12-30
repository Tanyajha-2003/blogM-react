import React from "react";

function Blog(props){
return(
    <div className="blog">
        <div>{props.imgURL}</div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.theme}</p>
        <p>{props.description}</p>
    </div>
);
}

export default Blog;
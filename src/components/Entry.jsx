import React from "react";

function Entry(props) {
  return (
    <div className="term">
    <img className="circle-img" src={props.imgURL} alt="avatar_img" />;
      <dt>
      <span className="preblog">
        {props.title}
      </span>
      <span>{props.content}</span>
      <span className="theme">{props.theme}</span>
      
      </dt>
      <dd>{props.description}</dd>
      <button class="btn">Read More</button>
    </div>
  );
}

export default Entry;

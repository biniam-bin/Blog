import React from "react";
import "./singlepost.css";

function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
              <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                  <div className="singelPostEdit">
                      <i className="far fa-edit"></i>
                      <i className="far fa-trash-alt"></i>
                 </div>
              </h1>
      </div>
    </div>
  );
}

export default singlePost;

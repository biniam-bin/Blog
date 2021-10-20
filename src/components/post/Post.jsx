import React from "react";
import "./post.css";

function Post() {
  
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">MUSIC</span>
          <span className="postCat">LIFE</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatem facere laborum natus voluptatum minima sed, ad vitae quasi,
        corporis quibusdam facilis illum maiores asperiores? Ducimus, eius
        recusandae! Culpa voluptate totam autem aperiam quas. Fuga hic ad illum
        non quos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatem facere laborum natus voluptatum minima sed, ad vitae quasi,
        corporis quibusdam facilis illum maiores asperiores? Ducimus, eius
        recusandae! Culpa voluptate totam autem aperiam quas. Fuga hic ad illum
        non quos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatem facere laborum natus voluptatum minima sed, ad vitae quasi,
        corporis quibusdam facilis illum maiores asperiores? Ducimus, eius
        recusandae! Culpa voluptate totam autem aperiam quas. Fuga hic ad illum
        non quos.
      </p>
    </div>
  );
}

export default Post;

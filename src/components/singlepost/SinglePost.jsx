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
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Biniam</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa
          culpa vero eos maxime iure voluptates saepe veritatis, magnam
          accusantium omnis sequi distinctio odio ducimus, dignissimos
          repellendus quidem ea, odit numquam praesentium? Est expedita
          perferendis tenetur error nostrum sit velit fugit libero accusantium,
          dolorem laborum quidem in ut, sequi assumenda adipisci provident
          eveniet maiores alias harum dolore fuga consequuntur. Ducimus rem ab
          consequuntur, assumenda voluptate doloribus, ratione nobis cumque
          tempora adipisci corporis quaerat, cum mollitia odio eveniet magnam
          omnis optio quidem nulla. At minima labore rerum neque aperiam
          consectetur, itaque dolor tempore possimus laudantium facere aut
          beatae rem aliquid dignissimos accusantium recusandae earum totam
          numquam quibusdam quaerat! Alias dolore, enim eaque modi tempora rem
          quo iusto non nihil corporis veniam, odit necessitatibus expedita
          accusamus labore assumenda ex porro, illo consectetur eligendi ipsa.
          Explicabo adipisci natus dolor vero vitae perspiciatis ullam in
          expedita, modi debitis laboriosam cum repellendus aut voluptas
          voluptates molestiae hic tenetur quaerat quibusdam dicta, excepturi
          obcaecati temporibus! Maiores quia voluptate enim ipsum id reiciendis
          animi quibusdam perspiciatis doloremque. Earum quo, magnam pariatur
          ullam omnis totam temporibus illum! Repudiandae, ut maxime deserunt
          excepturi repellendus maiores. Distinctio ad numquam non doloribus
          veniam, quidem ut exercitationem iure asperiores excepturi quis
          adipisci.
        </p>
      </div>
    </div>
  );
}

export default singlePost;

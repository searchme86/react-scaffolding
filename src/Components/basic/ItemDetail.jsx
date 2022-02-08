import React from "react";

function ItemDetail({ post }) {
  return (
    <>
      <h4 className="title">Title: {post.title}</h4>
      <p>{post.body}</p>
    </>
  );
}

export default ItemDetail;

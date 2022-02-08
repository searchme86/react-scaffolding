import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPost } from "../../Server/Fetcher.js";
import ItemDetail from "./ItemDetail";

function Item() {
  const [selectedPost, setSelectedPost] = useState(null);
  //   const getItem = (item) => {
  //     setSelectedPost(item);
  //   };
  const { isLoading, isError, error, data } = useQuery("posts", fetchPost, {
    staleTime: 200,
  });
  //   if (!data) return <div />;
  if (isLoading) return <h1>로딩중입니다..</h1>;

  return (
    <div>
      {!isError ? (
        <>
          <ul>
            {data.map((post) => (
              <li key={post.id} onClick={() => setSelectedPost(post)}>
                {post.title}
              </li>
            ))}
          </ul>
          {selectedPost && <ItemDetail post={selectedPost} />}
        </>
      ) : (
        <div>
          <h2>에러가 발생했습니다!</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Item;

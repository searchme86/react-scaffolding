import React from "react";
import { useQuery } from "react-query";
import { fetchComments } from "../../Server/Fetcher";

function PageDetail({ post }) {
  const { isLoading, isError, error, data } = useQuery("comments", () =>
    fetchComments(post.id)
  );
  if (!data) return <div />;
  if (isLoading)
    return <p>현재 로딩 중입니다, 데이터를 가지고 오고 있습니다.</p>;

  return (
    <div>
      <div className="postDetail-post-area">
        <h3 className="post-title">{post.title}</h3>
        <div className="btn-area">
          <button>Delete</button>
          <button>Update title</button>
        </div>
        <p className="post-body">{post.body}</p>
      </div>
      <div className="postDetaicomment-area">
        <h4 className="comment-title">Comments</h4>
        <ul className="comment-list">
          {data.map((comment) => (
            <li key={comment.id}>
              {comment.demial}:{comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageDetail;

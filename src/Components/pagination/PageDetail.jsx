import React from "react";
import { useQuery } from "react-query";
import { fetchComments } from "../../Server/Fetcher";

function PageDetail({ post }) {
  // const { isLoading, isError, error, data } = useQuery("comments", () =>
  //   fetchComments(post.id)
  // );

  const { isLoading, isError, error, data } = useQuery(
    ["comments", post.id],
    () => fetchComments(post.id)
  );

  if (!data) return <div />;
  if (isLoading)
    return <p>현재 로딩 중입니다, 데이터를 가지고 오고 있습니다.</p>;

  return (
    <>
      {!isError ? (
        <>
          <div className="postDetail-post-area">
            <h3 className="post-title">Title : {post.title}</h3>
            <div className="pages-buttons">
              <button>Delete</button>
              <button>Update title</button>
            </div>
            <strong className="post-body">Body : {post.body}</strong>
          </div>
          <div className="postDetail-comment-area">
            <h4 className="title">Comments</h4>
            <ul className="comment-list">
              {data.map((comment) => (
                <li key={comment.id}>
                  <strong className="li-title">{comment.email}:</strong>
                  <span className="li-content">{comment.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="pageDetail-error-area">
          <strong className="error-title">에러가 있습니다</strong>
          <p class="error-content">{error}</p>
        </div>
      )}
    </>
  );
}

export default PageDetail;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPost } from "../../Server/Fetcher";
import PageDetail from "./PageDetail";

function Pages() {
  const maxPostPage = 10;
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, isError, data, error } = useQuery("posts", fetchPost);
  if (isLoading)
    return <p>현재 로딩 중입니다, 데이터를 가지고 오고 있습니다.</p>;
  if (!data) return <div />;

  return (
    <>
      {!isError ? (
        <div className="content">
          <strong>아래 문장을 클릭해보세요</strong>
          <ul>
            {data.map((post) => (
              <li key={post.id} onClick={() => setSelected(post)}>
                {post.id} : {post.title}
              </li>
            ))}
          </ul>
          <div className="pages-buttons">
            <button disabled onClick={() => {}}>
              Previous page
            </button>
            <span className="middle">Page {currentPage + 1}</span>
            <button disabled onClick={() => {}}>
              Next page
            </button>
          </div>
          {selected && <PageDetail post={selected} />}
        </div>
      ) : (
        <div className="pages-error-area">
          <strong className="error-title">에러가 발생했습니다!</strong>
          <p class="error-content">{error}</p>
        </div>
      )}
    </>
  );
}

export default Pages;

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
    <div>
      {!isError ? (
        <div>
          <ul>
            {data.map((post) => (
              <li key={post.id} onClick={() => setSelected(post)}>
                {post.title}
              </li>
            ))}
          </ul>
          <div className="pages">
            <button disabled onClick={() => {}}>
              Previous page
            </button>
            <span>Page {currentPage + 1}</span>
            <button disabled onClick={() => {}}>
              Next page
            </button>
          </div>
          {selected && <PageDetail post={selected} />}
        </div>
      ) : (
        <div>
          <h2>에러가 발생했습니다!</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Pages;

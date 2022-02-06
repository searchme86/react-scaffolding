import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../api/posts";
import PostList from "components/PostList";

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생!...</p>;
  if (!data) return <p>data가 없습니다!</p>;

  return <PostList posts={data} />;
}

export default PostListContainer;

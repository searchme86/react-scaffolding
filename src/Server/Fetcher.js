const BaseUrl = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0`;

export const fetchPost = async () => {
  const response = await (await fetch(BaseUrl)).json();
  return response;
};

export const fetchComments = async (postId) => {
  const response = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
  ).json();
  return response;
};

export const deletePost = async (postId) => {
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/postId/${postId}`, {
      method: "DELETE",
    })
  ).json();
  return response;
};

export const updatePost = async (postId) => {
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/postId/${postId}`, {
      method: "PATCH",
      data: { title: "I LOVE REACT-QUERY" },
    })
  ).json();
  return response;
};

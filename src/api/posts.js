const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어를 배워봅시다",
    body: "리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠",
  },
  {
    id: 2,
    title: "redux-thunk를 배워봅시다",
    body: "redux-thunk를 직접 만들어보면 이해하기 쉽죠",
  },
  {
    id: 3,
    title: "redux-saga를 배워봅시다",
    body: "redux-saga를 직접 만들어보면 이해하기 쉽죠",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};

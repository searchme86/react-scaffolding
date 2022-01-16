import React from "react";
import { Link, Outlet } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <div className=""></div>
      <div className="">
        <ul>
          <Outlet />
          <li>
            <Link to="/articles/1">게시글1</Link>
          </li>
          <li>
            <Link to="/articles/2">게시물2</Link>
          </li>
          <li>
            <Link to="/articles/3">게시물3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Article;

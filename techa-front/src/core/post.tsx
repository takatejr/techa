import React from "react";
import { Posts } from '../types/posts.type';

export const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(posts);

  return (
    <div className="container">
      {posts.map(({ title, author, logo, content, autograph, comments }: Posts) => (
        <div key={`${title}` + `${author}`} className="post">
          <div className="logo">{logo}</div>
          <p aria-label="title" title="title">
            {title}
          </p>
          <span>{author}</span>
          <div className="content">{content}</div>
          <div className="autograph">{autograph}</div>
          <div>{comments}</div>
        </div>
      ))}
    </div>
  );
};
export default Post;

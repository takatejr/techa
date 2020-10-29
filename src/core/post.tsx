import React, { useState } from "react";
import { useQuery } from "react-query";
import { Posts } from "../types/posts.type";

export function Post() {
  const [posts, getPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage, setPostsPerPage] = useState(1);

  const { isLoading, error, data } = useQuery("posts", async (posts) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${posts}`);
    return res.json();
  });

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;

  
  if (isLoading) {
    return <h2>Ładowanie...</h2>;
  }

  if (error) {
    return <h2>Wystąpił błąd: {error}</h2>;
  }

  const datax: Array<Posts> = [
    {
      logo: "abc",
      title: "hey",
      author: "author",
      content: "content",
      autograph: "autograph",
    },
  ];

  return (
    <div className="container">
      {datax.map((el) => {
        <div className="post">
          <div>{el.logo}</div>
          <h1 aria-label="title" title="title">
            {el.title}
          </h1>
          <span>{el.author}</span>
          <div className="content">{el.content}</div>
          <div className="autograph">{el?.autograph}</div>
        </div>;
      })}
    </div>
  );
}

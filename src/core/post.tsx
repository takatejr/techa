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

  const dat: Array<Posts> = [
    {
      logo: "SCALA",
      title: "hey",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },    {
      logo: "SCALA",
      title: "hey",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },    {
      logo: "SCALA",
      title: "hey",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },
  ];

  return (
    <div className="container">
      {dat.map((el) => (
        <div className="post">
          <div className="logo">{el.logo}</div>
          <p aria-label="title" title="title">{el.title}</p>
          <span>{el.author}</span>
          <div className="content">{el.content}</div>
          <div className="autograph">{el.autograph}</div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { useQuery } from "react-query";

export function Content() {
  const [posts, getPosts] = useState();
  const { isLoading, error, data } = useQuery("posts", async (posts) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${posts}`);
    return res.json();
  });

  if (isLoading) {
    return <h2>Ładowanie...</h2>;
  }

  if (error) {
    return <h2>Wystąpił błąd: {error}</h2>;
  }

  return (
    <div className="container">
      <div>logo</div>
      <h1 aria-label="title" title="title">
        title
      </h1>
      <span>author</span>
      <div className="content">content</div>
      <div className="autograph"></div>
    </div>
  );
}

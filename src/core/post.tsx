import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Posts } from "../types/posts.type";

type postsx = {
  id: number,
  title: string,
  body: string,
}


export function Post({posts}) {

  // if(loading) {
  //   return <h2>Loading...</h2>
  // }

  const dat: Array<Posts> = [
    {
      logo: "SCALA",
      title: "hey",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },    {
      logo: "SCALA",
      title: "heyo",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },    {
      logo: "SCALA",
      title: "heyx",
      author: "Person aka Takate",
      content: "It's my first post here, so i need more content to fill that website, lorem ipsum is too mainstream, so i want to write some text by myself. See you later aligator",
      autograph: `Here would be image of ur "autograph" `,
    },
  ];

  return (
    <div className="container">
      {dat.map((el) => (
        <div key={`${el.title}` + `${el.author}`} className="post">
          <div className="logo">{el.logo}</div>
          <p aria-label="title" title="title">{el.title}</p>
          <span>{el.author}</span>
          <div className="content">{el.content}</div>
          <div className="autograph">{el.autograph}</div>
        </div>
      ))}
      {/* {<ul>
        <div>{title}</div>
        <div>{body}</div>
        </ul>} */}
    </div>
  );
}

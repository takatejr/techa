import React, { useState } from "react";
import { useQuery } from "react-query";
import "./App.scss";
import Navbar from "./core/navbar";
import { Post } from './core/post';



function App() {
const [language, setLanguage] = useState("SCALA")
const [posts, setPosts] = useState();
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(10);
const [loading, setLoading] = useState(false);



const { isLoading, error, data } = useQuery("posts", async () => {
  setLoading(true);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  setPosts(await res.json());
  console.log(posts)
  setLoading(false);
});
type postsx = {
  id: number,
  title: string,
  body: string,
}
// const indexOfLastPost = currentPage * PostsPerPage;
// const indexOfFirstPost = indexOfLastPost - PostsPerPage;

if (isLoading) {
  return <h2>Ładowanie...</h2>;
}

if (error) {
  return <h2>Wystąpił błąd: {error}</h2>;
}

  return (
    <div>
      <Navbar></Navbar>
      <Post posts={posts: postsx}></Post>
    </div>
  );
}

export default App;

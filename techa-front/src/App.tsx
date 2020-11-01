import React, { useState } from "react";
import { useQuery } from "react-query";
import "./App.scss";
import Navbar from "./core/navbar";
import { Posts } from './types/posts.type';
import Post from './core/post';
import { getAllPosts } from './services/fetchData';

function App() {
const [language, setLanguage] = useState("SCALA")
const [posts, setPosts] = useState<Posts[]>([{
  logo: "",
  title: "",
  author: "",
  content: "", 
  autograph: ""
  }]);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(10);
const [loading, setLoading] = useState(false);

  const getPostsFromApi = () => {
  getAllPosts().then((posts) => {
    console.log(posts)
    setPosts(posts)
  })};
  
const { isLoading, error, data } = useQuery("posts", async () => {
  setLoading(true);
  getPostsFromApi();
  setLoading(false);
});

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
      <button onClick={getPostsFromApi}></button>
      <Navbar></Navbar>
      <Post posts={posts}></Post>
    </div>
  );
}

export default App;

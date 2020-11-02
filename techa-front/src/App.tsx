import React, { useState } from "react";
import { useQuery } from "react-query";
import "./App.scss";
import Navbar from "./core/navbar";
import { Posts } from "./types/posts.type";
import Post from "./core/post";
import { getAllPosts } from "./services/fetchData";
import Pagination from "./core/pagination";

function App() {
  const [language, setLanguage] = useState("SCALA");
  const [posts, setPosts] = useState<Posts[]>([
    {
      logo: "",
      title: "",
      author: "",
      content: "",
      autograph: "",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);

  const getPostsFromApi = () => {
    getAllPosts().then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  };

  const { isLoading, error, data } = useQuery("posts", async () => {
    setLoading(true);
    getPostsFromApi();
    setLoading(false);
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

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
      <Post posts={currentPosts} loading={loading}></Post>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}

export default App;

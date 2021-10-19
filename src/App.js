import PostContainer from "./Containers/PostContainer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import PostView from "./Components/PostView";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("http://localhost:8000/post").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  const handleLike = (post) => {
    console.log(post.id, "like connect");
    axios
      .put(`http://localhost:8000/post/${post.id}`, {
        ...post,
        likes: post.likes + 1,
      })
      .then((resp) => {
        console.log(resp.data, "resp");
        const newLikePost = resp.data;
        setPosts(
          posts.map((post) => {
            return post.id === newLikePost.id ? newLikePost : posts;
          })
        );
      });
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return <PostContainer posts={posts} handleLike={handleLike} />;
          }}
        />

        <Route
          exact
          path="/post/:id"
          render={() => {
            return <PostView posts={posts} />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;

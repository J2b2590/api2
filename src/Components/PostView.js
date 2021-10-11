import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PostView = ({ posts }) => {
  const { id } = useParams();

  const currentPost = posts.find((postId) => postId.id == id);

  console.log(currentPost, "current");
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{currentPost.author}</h1>
      <p>{currentPost.body}</p>
    </div>
  );
};

export default PostView;

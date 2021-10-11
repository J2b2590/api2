import { Link } from "react-router-dom";

const PostIndex = (props) => {
  console.log(props);
  let author = props.post.author;
  let body = props.post.body;
  let id = props.post.id;
  return (
    <div className="postWhole">
      <h2 className="postAuthor">{author}</h2>
      <Link to={`/post/${id}`}>View Post</Link>
      <div className="postBody">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostIndex;

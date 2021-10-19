import { Link } from "react-router-dom";

const PostIndex = (props) => {
//   console.log(props);
  let author = props.post.author;
  let body = props.post.body;
  let likes = props.post.likes;
  let id = props.post.id;
  return (
    <div className="postWhole">
      <h2 className="postAuthor">{author}</h2>
      <Link to={`/post/${id}`}>View Post</Link>
      <div className="postBody">
        <p>{body}</p>
      </div>
      <div>
        <p>Likes: {likes}</p>
        <button
          onClick={() => {
            props.handleLike(props.post);
          }}
        >
          LIKE
        </button>
      </div>
    </div>
  );
};

export default PostIndex;

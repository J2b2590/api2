import PostIndex from "../Components/PostIndex";

const PostContainer = (props) => {
  let posts = props.posts;
  console.log(props);
  return (
    <div className="postContainer">
      <h1>post container</h1>
      {posts.map((post, id) => {
        return <PostIndex id={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostContainer;

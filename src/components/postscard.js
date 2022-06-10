const Posts = (props) => {
  const { name, username, posts } = props;
  return (
    <div>
      <div className={"user"}>
        <p>{name}</p>
        <p>{username}</p>
      </div>
      <div className={"content"}>
        <p>{posts}</p>
      </div>
    </div>
  );
};

export default Posts;

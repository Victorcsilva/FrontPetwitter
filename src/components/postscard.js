const Posts = (props) => {
  const { name, username, posts } = props;
  return (
    <div className={"posts"}>
      <p>{name}</p>
      <p>{username}</p>
      <p>{posts}</p>
    </div>
  );
};

export default Posts;

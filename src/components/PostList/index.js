import Post from "./Post";
import styles from "./postList.module.scss";

const PostList = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data.map((post) => {
          return <Post title={post.title} date={post.date} slug={post.slug} />;
        })}
      </div>
    </div>
  );
};

export default PostList;

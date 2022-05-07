import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { PostList } from "../../services/posts.service";
import styles from "./posts.module.scss";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [option, setOption] = useState("published");

  useEffect(() => {
    let result = PostList.filter((post) => {
      return post.status === option;
    });
    setPostList(result);
  }, [option]);

  return (
    <div className={styles.posts}>
      <h2>Posts</h2>

      <div className={styles.DisplaySearchBar}>
        <ul className="list-unstyled list-inline">
          <li className={styles.active} onClick={() => setOption("published")}>
            <span>Publicados</span>
          </li>
          <li onClick={() => setOption("draft")}>
            <span>Rascunhos</span>
          </li>
          <li onClick={() => setOption("trash")}>
            <span>Lixeira</span>
          </li>
        </ul>
        <Link to="/">
          <button type="button" className="outline">
            <i className="ri-add-line ri-xl"></i>
            <span>Nova Publicação</span>
          </button>
        </Link>
      </div>

      <div className={styles.list}>
        {postList.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <div className={styles.left}>
                <h4>{post.title}</h4>
                <small>
                  <em>{post.date}</em>
                </small>
              </div>
              <div className={styles.right}>
                <Link to="/">
                  <button type="button">
                    <i className="ri-eye-line ri-xl"></i>
                    <span>Visualizar</span>
                  </button>
                </Link>
                <Link to="/">
                  <button type="button">
                    <i className="ri-edit-line ri-xl"></i>
                    <span>Editar</span>
                  </button>
                </Link>
                <Link to="/">
                  <button type="button">
                    <i className="ri-stop-fill ri-xl"></i>
                    <span>Suspender</span>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

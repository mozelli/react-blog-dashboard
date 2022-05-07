import { Link } from "react-router-dom";

import styles from "./post.module.scss";

const Post = (props) => {
  const { title, date, slug } = props;

  return (
    <div className={styles.post}>
      <div className={styles.leftBlockPost}>
        <div className={styles.title}>
          <Link to={`/post/${slug}`}>{title}</Link>
        </div>
        <div className={styles.date}>
          <i className="ri-calendar-2-line"></i>
          <span>{date}</span>
        </div>
      </div>
      <div className={styles.rightBlockPost}>
        <div className={styles.options}>
          <ul>
            <Link to="/">
              <li>
                <i className="ri-eye-line ri-xl"></i> Visualizar
              </li>
            </Link>
            <li>
              <i className="ri-pencil-line ri-xl"></i> Editar
            </li>
            <li>
              <i className="ri-delete-bin-line ri-xl"></i> Colocar na lixeira
            </li>
          </ul>
        </div>
        <Link to="/">
          <i className="ri-arrow-down-s-line ri-xl"></i>
        </Link>
      </div>
    </div>
  );
};

export default Post;

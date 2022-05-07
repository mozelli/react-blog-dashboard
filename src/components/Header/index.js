import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftHeaderBlock}>
        <Link to="/">
          <h1 className={styles.brand}>Dashboard</h1>
        </Link>
        <i className="ri-shield-user-line ri-xl"></i>
        <span>Olá João!</span>
      </div>
      <div className={styles.rightHeaderBlock}>
        <nav>
          <ul>
            <Link to="/">
              <li>
                <i className="ri-dashboard-fill"></i> Painel
              </li>
            </Link>
            <li>
              <i className="ri-settings-4-fill"></i> Configurações
            </li>
            <li>
              <i className="ri-profile-line"></i> Profile
            </li>
            <li>
              <i className="ri-shut-down-line"></i> Sair
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

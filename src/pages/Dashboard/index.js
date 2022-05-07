import { Outlet } from "react-router";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.display}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

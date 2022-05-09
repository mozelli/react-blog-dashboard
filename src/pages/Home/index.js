//import { Outlet } from "react-router";
import { useState } from "react";
import Radio from "../../components/Utils/Radio";
import styles from "./home.module.scss";

const Home = () => {
  const [radioSelected, setRadioSelected] = useState("");

  return (
    <div className={styles.home}>
      <h2>Home Dashboard</h2>

      <Radio
        label="Casado"
        name="estado-civil"
        value="casado"
        action={setRadioSelected}
      />
      <Radio
        label="Solteiro"
        name="estado-civil"
        value="solteiro"
        action={setRadioSelected}
      />
      <Radio
        label="Divorciado"
        name="estado-civil"
        value="divorciado"
        action={setRadioSelected}
      />
      <hr />
      {radioSelected}
    </div>
  );
};

export default Home;

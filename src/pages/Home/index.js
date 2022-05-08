//import { Outlet } from "react-router";
import { useState } from "react";
import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";
import Select from "../../components/Utils/Select";
import styles from "./home.module.scss";

const Home = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const optionValues = [
    { value: "", option: "Escolha" },
    { value: "Masculino", option: "Masculino" },
    { value: "Feminino", option: "Feminino" },
  ];
  const [optionSelected, setOptionSelected] = useState("");

  return (
    <div className={styles.home}>
      <h2>Home Dashboard</h2>

      <Select
        label="Gênero"
        options={optionValues}
        valueSelected={optionSelected}
        action={setOptionSelected}
      />

      <div className="row">
        <div className="col-3">
          <Input label="Nome" type="text" value={name} action={setName} />
        </div>
        <div className="col-3">
          <Input label="Endereço" type="text" value={name} action={setName} />
        </div>
      </div>

      <Input label="Nome" type="text" value={address} action={setAddress} />

      <Button type="button" styles="primary" size="lg">
        Hello! {optionSelected}
      </Button>
    </div>
  );
};

export default Home;

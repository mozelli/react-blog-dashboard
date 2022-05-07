import { useState } from "react";
import styles from "./input.module.scss";

const Input = ({ value, action }) => {
  return (
    <div className="formGroup">
      <input type="text" value={value} onChange={action} placeholder="" />
    </div>
  );
};

export default Input;

import { createRandom } from "../lib/essentials";
import styles from "./radio.module.scss";

const Radio = (props) => {

  const radioId = createRandom(8);

  return (
    <div className={ styles.radioContainer }>
      <input 
        type="radio" 
        id={ radioId } 
        name={ props.name } 
        value={ props.value } 
        onClick={ (event) => props.action(event.target.value) } 
      />
      
      <label 
        htmlFor={ radioId } 
        className={ styles.radioLabel }>{ props.label }</label>
    </div>
  );
}

export default Radio;
import { createRandom } from '../lib/essentials';
import styles from './input.module.scss';

const Input = (props) => {

  const selectId = createRandom(6);

  return (
    <>
      {(props.label && <label htmlFor={ selectId } className={ styles.inputLabel }>{ props.label }</label>)}
      <input 
      id={ selectId }
      type={ props.type } 
      value={ props.value } 
      className={ `${styles[props.size]}` }
      onChange={(event) =>  props.action(event.target.value) }  
    />
    </>
  );
}

export default Input;
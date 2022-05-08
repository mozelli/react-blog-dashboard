import { createRandom } from '../lib/essentials';
import styles from './checkbox.module.scss';

const Checkbox = (props) => {

  const checkboxId = createRandom(8);

  return (
    <div className={ styles.checkboxContainer }>
      <input 
        id={ checkboxId } 
        type="checkbox" 
        className={ styles.checkbox } 
        value={ props.value } 
        onChange={ (event) => props.action(event.target.value) } 
      />
      <label htmlFor={ checkboxId } className={ styles.checkbox }>{ props.label }</label>
    </div>
  );
}

export default Checkbox;
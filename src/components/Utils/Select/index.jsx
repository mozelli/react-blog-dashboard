import { createRandom } from '../lib/essentials';
import styles from "./select.module.scss";

const Select = (props) => {

  const selectId = createRandom(6);

  return (
    <>
      {(props.label && <label htmlFor={ selectId } className={ styles.selectLabel }>{ props.label }</label>)}
      <select id={ selectId } onChange={ (event) => props.action(event.target.value) }>
        {
          props.options.map((option) => {
            return (
              <option key={option.option} value={ option.value }>{ option.option }</option>
            )
          })
        }
      </select>
    </>
  );
}

export default Select;
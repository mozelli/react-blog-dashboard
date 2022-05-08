import styles from './button.module.scss';

const Button = (props) => {
  return (
    <button  
      type={props.type} 
      className={`${styles[props.styles]} ${styles[props.size]}`}
    >
      <span>{ props.children }</span>
    </button>
  );
}

export default Button;
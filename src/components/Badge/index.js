import styles from './badge.module.scss';

const Badge = (props) => {
    return (
        <div className={ styles.badge }>
            <div className={ styles.border }>
                <span>{ props.value }</span>
            </div>
        </div>
    );
}

export default Badge;
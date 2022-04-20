import styles from './tag.module.scss';

const Tag = (props) => {
    return (
        <div className={ styles.tag }>
            <div className={ styles.left }>
                <i className="ri-price-tag-3-line ri-xl"></i><span>{ props.name }</span>
            </div>
            <div className={ styles.right }>
                <i class="ri-arrow-down-s-line ri-xl"></i>
            </div>
        </div>
    );
}

export default Tag;
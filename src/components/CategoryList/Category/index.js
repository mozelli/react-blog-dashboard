import { Link } from 'react-router-dom';
import styles from './category.module.scss';

const Category = (props) => {
    return (
        <div className={ styles.category }>
            <div className={ styles.left }>
                <i className="ri-bookmark-line ri-xl"></i> <span>{ props.name }</span>
            </div>
            <div className={ styles.right }>
                <div className={ styles.options }>
                    <ul>
                        <Link to="/">
                            <li><i className="ri-eye-line ri-xl"></i> Visualizar</li>
                        </Link>
                        <li><i className="ri-pencil-line ri-xl"></i> Editar</li>
                        <li><i className="ri-delete-bin-line ri-xl"></i> Colocar na lixeira</li>
                    </ul>
                </div>
                <Link to="/">
                    <i className="ri-arrow-down-s-line ri-xl"></i>
                </Link>
            </div>
        </div>
    )
}

export default Category;
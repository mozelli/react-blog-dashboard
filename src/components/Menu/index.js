import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu = () => {
    return (
        <nav className={ styles.nav }>
            <h2>Menu</h2>
            <ul>
                <Link to="/posts">
                    <li><i className="ri-file-line"></i> Posts</li>
                </Link>
                <Link to='/tags'>
                    <li><i className="ri-price-tag-3-line"></i> Tags</li>
                </Link>
                <Link to='/categories'>
                    <li><i className="ri-bookmark-line"></i> Categorias</li>
                </Link>
                <Link to='/users'>
                    <li><i className="ri-user-line"></i> Usuários</li>
                </Link>
                <Link to="/">
                    <li><i className="ri-eye-line"></i> Visualizar o blog</li>
                </Link>


            </ul>
        </nav>
    );
}

export default Menu;
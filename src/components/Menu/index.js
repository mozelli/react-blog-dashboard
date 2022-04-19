import styles from './menu.module.scss';

const Menu = () => {
    return (
        <nav className={ styles.nav }>
            <h2>Menu</h2>
            <ul>
                <li><i class="ri-file-line"></i> Posts</li>
                <li><i class="ri-price-tag-3-line"></i> Tags</li>
                <li><i class="ri-bookmark-line"></i> Categorias</li>
                <li><i class="ri-window-line"></i> Páginas</li>
                <li><i class="ri-t-shirt-2-line"></i> Temas</li>
                <li><i class="ri-user-line"></i> Usuários</li>

            </ul>
        </nav>
    );
}

export default Menu;
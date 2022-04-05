import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.leftHeaderBlock }>
                <a href='/' className={ styles.menuButton }>
                    <i class="ri-menu-line ri-xl"></i>
                </a>
                <a href="/">
                    <h1 className={ styles.title }>
                        Dashboard
                    </h1>
                </a>
            </div>
            <div className={ styles.rightHeaderBlock }>
                <a href="/" className={ styles.searchButton }>
                    <i class="ri-search-line ri-xl"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;
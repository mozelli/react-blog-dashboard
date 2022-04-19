import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={ styles.headerContainer }>
            <div className={ styles.leftHeaderBlock }>
                <a href="/">
                    <h1 className={ styles.brand }>
                        Dashboard
                    </h1>
                </a>
                <i class="ri-shield-user-line ri-xl"></i>
                <span>Olá João!</span>
            </div>
            <div className={ styles.rightHeaderBlock }>
                <nav>
                    <ul>
                        <li><i class="ri-dashboard-fill"></i> Painel</li>
                        <li><i class="ri-settings-4-fill"></i> Configurações</li>
                        <li><i class="ri-profile-line"></i> Profile</li>
                        <li><i class="ri-shut-down-line"></i> Sair</li>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
}

export default Header;
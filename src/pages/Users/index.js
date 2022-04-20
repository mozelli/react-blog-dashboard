import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styles from './users.module.scss';

const Users = () => {
    return (
        <div className={ styles.users }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                Users
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Users;
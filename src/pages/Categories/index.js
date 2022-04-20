import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styles from './categories.module.scss';
import CategoryList from '../../components/CategoryList';

const Categories = () => {
    return (
        <div className={ styles.categories }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                <CategoryList />
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Categories;
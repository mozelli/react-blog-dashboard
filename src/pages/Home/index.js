import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
// import Posts from '../../components/Posts';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={ styles.home }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                Display
                {/* <Posts /> */}
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Home;
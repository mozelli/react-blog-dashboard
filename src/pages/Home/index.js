import Header from '../../components/Header';
import Posts from '../../components/Posts';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div>
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.main }>
                <Posts />
            </div>
        </div>
    );
}

export default Home;
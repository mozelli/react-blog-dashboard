import Header from '../../components/Header';
// import Posts from '../../components/Posts';
import styles from './home.module.scss';

import TextEditor from '../../components/TextEditor';

const Home = () => {
    return (
        <div>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <TextEditor />
            <div className={ styles.main }>
                {/* <Posts /> */}
            </div>
        </div>
    );
}

export default Home;
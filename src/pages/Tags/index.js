import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import TagList from '../../components/TagList';

import styles from './tags.module.scss';

const Tags = () => {
    return (
        <div className={ styles.tags }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                <TagList />
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Tags;
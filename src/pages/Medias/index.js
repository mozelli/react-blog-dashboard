import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styles from './medias.module.scss';

const Medias = () => {
    return (
        <div className={ styles.medias }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                <h1>Midias</h1>
                <p>Gerencie todas as mídias em seu site, incluindo imagens, vídeos e muito mais.</p>
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Medias;
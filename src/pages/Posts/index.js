import Header from './../../components/Header';
import Menu from './../../components/Menu';
import PostList from '../../components/PostList';
import Footer from './../../components/Footer';
import styles from './posts.module.scss';

const Posts = () => {
    return (
        <div className={ styles.posts }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                <h1>Lista de Posts</h1>
                <p>Crie, edite e exclua seus posts aqui.</p>

                <div className={ styles.filter }>
                    <ul>
                        <li>Publicados</li>
                        <li>Rascunhos</li>
                        <li>Lixeira</li>
                    </ul>
                    <button type='button'>Criar novo post</button>
                </div>

                <PostList />
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Posts;
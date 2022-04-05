import Post from './Post';
import styles from './posts.module.scss';

const Posts = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.posts }>
                <Post title="Primeiro Post Pela Props" date="04 de abril de 2022" link="/" />
            </div>
        </div>
    );
}

export default Posts;
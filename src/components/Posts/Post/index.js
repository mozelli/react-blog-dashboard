import styles from './post.module.scss';

const Post = (props) => {
    const { title, date, link } = props;

    return (
        <div className={ styles.post }>
            <div className={ styles.leftBlockPost }>
                <div className={ styles.title }>
                    <a href={ link }>
                        { title }
                    </a> 
                </div>
                <div className={ styles.date }>
                    <i class="ri-calendar-2-line"></i> 
                    <span>
                        { date }
                    </span> 
                </div>
            </div>
            <div className={ styles.rightBlockPost }>
                <a href="/">
                    <i className="ri-arrow-down-s-line ri-xl"></i>
                </a>
            </div>
        </div>
    );
}

export default Post;
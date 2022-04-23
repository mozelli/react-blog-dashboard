import styles from './seguidores.module.scss';

const Seguidores = () => {
    return (
        <div className={ styles.seguidores }>
            <div className={ styles.content }>
                <div className={ styles.topBar }>
                    <span>Você tem 2 seguidores.</span>
                    <button type='button'><i className="ri-user-add-line"></i> Convidar</button>
                </div>
                <div className={ styles.box }>
                    <div className={ styles.left }>
                        <div className={ styles.avatar }>

                        </div>
                        <div className={ styles.info }>
                            <span className={ styles.name }>
                                Fernando
                            </span>
                            <span className={ styles.nickName }>@fernando</span>
                            <span className={ styles.date }>Desde 14 de dezembro de 2019</span>
                        </div>
                    </div>
                    <div className={ styles.right }>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>
                </div>

                <div className={ styles.box }>
                    <div className={ styles.left }>
                        <div className={ styles.avatar }>

                        </div>
                        <div className={ styles.info }>
                            <span className={ styles.name }>
                                Automação Web
                            </span>
                            <span className={ styles.nickName }>@automacaoweb</span>
                            <span className={ styles.date }>Desde 7 de outubro de 2019</span>
                        </div>
                    </div>
                    <div className={ styles.right }>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seguidores;
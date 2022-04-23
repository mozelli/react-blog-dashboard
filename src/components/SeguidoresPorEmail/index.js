import styles from './seguidoresporemail.module.scss';

const SeguidoresPorEmail = () => {
    return (
        <div className={ styles.seguidoresPorEmail }>
            <div className={ styles.content }>
                <div className={ styles.topBar }>
                    <span>Você ainda não tem seguidores.</span>
                    <button type='button'><i className="ri-user-add-line"></i> Convidar</button>
                </div>
                {/* <div className={ styles.box }>
                    <div className={ styles.left }>
                        <div className={ styles.avatar }>

                        </div>
                        <div className={ styles.info }>
                            <span className={ styles.name }>
                                João Mozelli Neto
                            </span>
                            <span className={ styles.nickName }>@joaomozelli</span>
                            <span className={ styles.access }>Administrador</span>
                        </div>
                    </div>
                    <div className={ styles.right }>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default SeguidoresPorEmail;
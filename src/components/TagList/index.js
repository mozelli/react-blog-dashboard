import styles from './tagList.module.scss';

const TagList = () => {
    return (
        <div className={ styles.tagList }>
            <h1>Lista de Tags</h1>
            <p>Crie, edite e exclua suas tags aqui.</p>
            <div className={ styles.tollBar }>
                <div className={ styles.left }>
                    <i className="ri-search-line ri-xl"></i> <span>Pesquisar...</span>
                </div>
                <div className={ styles.right }>
                    <button type='button'>Criar nova tag</button>
                </div>
            </div>

        </div>
    );
}

export default TagList;
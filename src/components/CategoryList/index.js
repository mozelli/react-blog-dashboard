import styles from './categoryList.module.scss';

const CategoryList = () => {
    return (
        <div className={ styles.categoryList }>
            <h1>Lista de Categorias</h1>
                <p>Crie, edite e exclua categorias aqui.</p>
                <div className={ styles.toolBar }>
                    
                </div>
        </div>
    )
}

export default CategoryList;
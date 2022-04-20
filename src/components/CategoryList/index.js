import Category from './Category';
import styles from './categoryList.module.scss';

const CategoryList = () => {
    const categories = [
        {id: 1, name: "Categoria 1"},
        {id: 2, name: "Categoria 2"}
    ];

    return (
        <div className={ styles.categoryList }>
            <h1>Lista de Categorias</h1>
            <p>Crie, edite e exclua categorias aqui.</p>
            <div className={ styles.tollBar }>
                <div className={ styles.left }>
                    <i className="ri-search-line ri-xl"></i> <span>Pesquisar...</span>
                </div>
                <div className={ styles.right }>
                    <button type='button'>Criar nova categoria</button>
                </div>
            </div>
            {
                categories.map((category) => {
                    return (
                        <Category key={ category.id } name={ category.name } />
                        )
                    })
            }
        </div>
    )
}

export default CategoryList;
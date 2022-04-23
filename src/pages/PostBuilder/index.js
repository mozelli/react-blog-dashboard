import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

import styles from './postBuilder.module.scss';



const PostBuilder = () => {
    const [postTitle, setPostTitle] = useState('');
    const [value, onChange] = useState('Comece aqui!');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [fixedOnTop, setFixedOnTop] = useState(false);

    function tagHandler() {
        setTags([...tags,tag]);
        setTag('');
    }

    return (
        <div className={ styles.postBuilder }>
            <div className={ styles.topBar }>

            </div>
            <main className={ styles.editor }>
                <div className="formGroup">
                    <input 
                        type="text" 
                        placeholder='Título' 
                        className={ styles.postTitle }
                        value={ postTitle }
                        onChange={ (event) => setPostTitle(event.target.value) } 
                    />
                </div>
                <RichTextEditor value={value} onChange={onChange} />
                <button type="button">Publicar</button>
                
            </main>

            <aside className={ styles.sideBar }>
                <div className="card">
                    <p>Fixar post no topo</p>
                </div>

                <div className="card">
                    <h1>Autor</h1>
                    <div className="formGroup">
                        <select name="author" id="author">
                            <option value="none">João Mozelli Neto</option>
                        </select>
                    </div>
                </div>

                <div className="card">
                    <h1>Tags</h1>
                    <small>Escolha uma tag ou crie uma nova.</small>
                    <div className="formGroup">
                        <div className="inputGroup">
                            <input type="text" value={tag} onChange={ (event) => setTag(event.target.value) } />
                            <button type="button" onClick={tagHandler}>
                                <i className="ri-add-line ri-xl"></i>
                            </button>
                        </div>
                    </div>
                    {
                        tags.map((tag, index) => {
                            return (
                                <span key={index}>"{ tag }" </span>
                            )
                        })
                    }
                </div>

                <div className="card">
                    <h1>Categoria</h1>
                    <small>Escolha uma categoria ou crie uma nova.</small>
                    <div className="formGroup">
                        <select name="category" id="category">
                            <option value="choose">Escola uma cateogoria</option>
                            <option value="none">Sem categoria</option>
                        </select>
                    </div>
                </div>

                <div className="card flex alignCenter justifyCenter">
                    <button className='danger'>Enviar para lixeira</button>
                </div>
            </aside>
        </div>
    );
}

export default PostBuilder;
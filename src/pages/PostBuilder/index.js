import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

import styles from './postBuilder.module.scss';



const PostBuilder = () => {
    const [postTitle, setPostTitle] = useState('');
    const [value, onChange] = useState('Comece aqui!');
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('Sem categoria');
    const [author, setAuthor] = useState('Anônimo');
    const [fixedOnTop, setFixedOnTop] = useState(false);
    const [post, setPost] = useState({});

    function changeFixedOnTopState() {
        let state = !fixedOnTop;
        setFixedOnTop(state);
    }

    function tagHandler() {
        setTags([...tags,tag]);
        setTag('');
    }

    function closeTag(tag) {
        let oldTagsArray = tags;
        let newTagsArray = oldTagsArray.filter((i) => {
            return i !== tag;
        });

        setTags(newTagsArray);
    }

    function postHandler() {
        setPost({
            title: postTitle,
            tags,
            category,
            author,
            body: value,
            fixedOnTop,
        });

        console.log(post);
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
                <button type="button" onClick={() => postHandler() }>Publicar</button>
                
            </main>

            <aside className={ styles.sideBar }>
                <div className="card">
                    <div className={ styles.customCheckbox }>
                        <input 
                            type="checkbox" 
                            id={ styles.fixedOnTop } 
                            
                            onChange={changeFixedOnTopState} 
                        />
                        <label htmlFor={ styles.fixedOnTop }>Fixar no topo</label>
                    </div>
                </div>

                <div className="card">
                    <h1>Autor</h1>
                    <div className="formGroup">
                        <select name="author" id="author" onChange={(event) => setAuthor(event.target.value)}>
                            <option value={ author }>Escolha</option>
                            <option value="João Mozelli Neto">João Mozelli Neto</option>
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
                    <span className={ styles.pill }>
                    {
                        tags.map((tag, index) => {
                            return (
                                
                                <button key={ index } onClick={() => closeTag(tag)}>
                                    {tag} <i className="ri-close-circle-line"></i>
                                </button>
                            );
                        })
                    }
                    </span>
                </div>

                <div className="card">
                    <h1>Categoria</h1>
                    <small>Escolha uma categoria ou crie uma nova.</small>
                    <div className="formGroup">
                        <select name="category" id="category" onChange={(event) => setCategory(event.target.value)}>
                            <option value={ category }>Escola uma cateogoria</option>
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
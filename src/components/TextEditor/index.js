import { useCallback, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
//import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

import styles from './editor.module.scss';

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", 'underline'],
    [{ color: [] }, { background:[] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"]
]

const TextEditor = () => {

    const [postTitle, setPostTitle] = useState("");

    //const [quill, setQuill] = useState();

    const wrapperRef = useCallback((wrapper) => {
        if(wrapper == null) return
        
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });
        //const q = new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });

        //setQuill(q);
        
    }, []);

    // function teste() {
    //     let delta = quill.clipboard.quill.editor.delta.ops;
    //     let cfg = {};
    //     let converter = new QuillDeltaToHtmlConverter(delta, cfg);
    //     let html = converter.convert();

    //     console.log(html);
    // }

    return (
        <div className={ styles.textEditor }>
            <div className={ styles.editor }>
                <div className="formGroup">
                    <input 
                        type="text" 
                        className={ styles.inputTitle } 
                        placeholder="Título"
                        value={ postTitle }
                        onChange={ (event) => setPostTitle(event.target.value) } />
                </div>
                
                <div id="container" ref={wrapperRef}></div>
                <div className="buttonGroup">
                    <button type='button' className={ styles.saveButton }><i class="ri-save-3-line ri-xl"></i> Salvar rascunho</button>
                    <button type='button' className={ styles.publishButton }><i class="ri-check-double-line ri-xl"></i> Publicar</button>
                </div>
            </div>

            <div className={ styles.configPost }>
                <div className={ styles.card }>
                    <h1>
                        Post
                    </h1>
                    <div className={ styles.checkbox }>
                        <input type="checkbox" id="fixedOnTop" />
                        <label htmlFor="fixedOnTop">Fixar no topo do blog</label>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="author">Autor</label>
                        <select name="author" id="autor">
                            <option value="João Mozelli Neto">João Mozelli</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default TextEditor;
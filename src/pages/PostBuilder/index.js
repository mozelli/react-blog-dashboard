import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

import styles from './postBuilder.module.scss';



const PostBuilder = () => {
    const [value, onChange] = useState('');

    return (
        <div className={ styles.postBuilder }>
            <div className={ styles.topBar }>

            </div>
            <main className={ styles.editor }>
                <div className="formGroup">
                    <input type="text" placeholder='Título' className={ styles.postTitle } />
                </div>
                <RichTextEditor value={value} onChange={onChange} />
                {value}
                
            </main>

            <aside className={ styles.sideBar }>

            </aside>
        </div>
    );
}

export default PostBuilder;
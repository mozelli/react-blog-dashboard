import { useState } from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styles from './users.module.scss';
import Equipe from '../../components/Equipe';
import Seguidores from '../../components/Seguidores';
import SeguidoresPorEmail from '../../components/SeguidoresPorEmail';
import Convites from '../../components/Convites';

const Users = () => {
    
    const [option, setOption] = useState(<Equipe />)
    
    function renderer(component) {
        switch(component) {
            case 'equipe':
                setOption(<Equipe />);
                break;
            case 'seguidores':
                setOption(<Seguidores />);
                break;
            case 'seguidoresPorEmail':
                setOption(<SeguidoresPorEmail />);
                break;
            case 'convites':
                setOption(<Convites />);
                break;
            default: 
                setOption(<Equipe />);
        }
    }

    return (
        <div className={ styles.users }>
            
            <div className={ styles.header }>
                <Header />
            </div>
            <div className={ styles.menu }>
                <Menu />
            </div>
            <div className={ styles.display }>
                <h1>Usuários</h1>
                <p>Convide colaboradores para seu site e gerencie suas configurações de acesso.</p>
                <div className={ styles.menu }>
                    <ul>
                        <li onClick={() => renderer('equipe')}>Equipe</li>
                        <li onClick={() => renderer('seguidores')}>Seguidores</li>
                        <li onClick={() => renderer('seguidoresPorEmail')}>Seguidores por email</li>
                        <li onClick={() => renderer('convites')}>Convites</li>
                    </ul>
                </div>
                { option }
            </div>
            <div className={ styles.footer }>
                <Footer />
            </div>
            
        </div>
    );
}

export default Users;
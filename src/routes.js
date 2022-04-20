import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Tags from './pages/Tags';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/posts' element={ <Posts /> } />
                <Route path='/tags' element={ <Tags /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
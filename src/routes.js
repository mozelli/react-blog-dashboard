import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Categories from './pages/Categories';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Tags from './pages/Tags';
import Users from './pages/Users';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/posts' element={ <Posts /> } />
                <Route path='/tags' element={ <Tags /> } />
                <Route path='/categories' element={ <Categories /> } />
                <Route path='/users' element={ <Users /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
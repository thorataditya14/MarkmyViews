// import { Routes, Route, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Books from './pages/Books';
import Book from './pages/Book';
// import Login from './pages/Login';
// import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/books" element={<Books />} />
            <Route path="/categories/:category" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/books/:bookid" element={<Book />} />

{/* 
            <Route path='/login'>
                {user ? <Navigate to='/' /> : <Login />}
            </Route>

            <Route path='/register'>
                {user ? <Navigate to='/' /> : <Register />}
            </Route> */}



            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default App;
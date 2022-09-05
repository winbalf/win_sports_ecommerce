// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Cart from './components/Cart/Cart';

const App = () => {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            element={<ItemListContainer/>}
          />
          <Route 
            path='/category/:categoryName' 
            element={<ItemListContainer/>}
          />
          
          <Route 
            path='/cart' 
            element={<Cart />}
          />
          <Route 
            path='/item/:productId' 
            element={<ItemDetailContainer />}
          />          
        </Routes>
        {/* <Main /> */}
        <Footer/>
      </BrowserRouter>
    )
};

export default App;

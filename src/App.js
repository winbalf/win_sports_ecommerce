// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
      <>
        <Header/>
        <ItemListContainer/>
        <ItemDetailContainer />
        {/* <Main /> */}
        <Footer/>
      </>
    )
};

export default App;

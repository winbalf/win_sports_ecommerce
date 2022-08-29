// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
      <>
        <Header/>
        <ItemListContainer/>
        <Main 
          // test="Probando" 
          // fecha={22}
          // alumno={
          //   {
          //     nombre: 'Thomas',
          //     curso: 'React'
          //   }
          // } 
        />
        <Footer/>
      </>
    )
};

export default App;

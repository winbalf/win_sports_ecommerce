// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a>Title</a>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
    return (
      <>
        <Header/>
        <ItemListContainer/>
        <Main 
          test="Probando" 
          fecha={22}
          alumno={
            {
              nombre: 'Thomas',
              curso: 'React'
            }
          } 
        />
        <Footer/>
      </>
    )
};

export default App;

import './App.css';
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <ItemListContainer titulo="Bienvenido al List Container"/>
      <Footer/>
    </div>
  );
}
export default App;

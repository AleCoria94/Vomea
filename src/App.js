import './App.css';
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import Itemlistcontainer from './components/Itemlistcontainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <Itemlistcontainer titulo="Bienvenido al List Container"/>
      <Footer/>
    </div>
  );
}
export default App;

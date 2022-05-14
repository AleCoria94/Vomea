
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
<BrowserRouter>
  <div className="App">
      <Navbar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        <Footer/>
    </div>
</BrowserRouter>
  );
}
export default App;

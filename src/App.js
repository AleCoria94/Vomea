import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Rutas from './routes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rutas/>
      <Footer/>
    </div>
  );
}
export default App;

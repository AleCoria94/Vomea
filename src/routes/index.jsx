import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer';
import Error from '../components/Error';

const Rutas = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default Rutas
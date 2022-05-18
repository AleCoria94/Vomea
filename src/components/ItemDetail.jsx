import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import useCartContext from "../context/CartContext"

export default function ItemDetail({data}){

        const{ addItem, isInCart, removeItem} = useCartContext();

     function onAdd(contador){
        addItem(data,contador)
    }
    return <>

    <div className="card d-flex justify-content-around">
        <div className="card-body-sm-3">
            <div className="row">
                <div className="col-sm-6">
                <div class="container">
                        <img src={data.img} className="card-img-top img-fluid" alt="..."/>
                    </div>
                    
                </div>
                <div className="col">
                    <h1 className="list-group-item">{data.name}</h1>
                    <li className="list-group-item">¡Quedan {data.stock} unidad/es disponible/s!</li>
                    <h1 className="list-group-item"> $ {data.price} </h1>

                {
                    isInCart(data.id) ?
                    (
                    <Link to="/Cart">
                    <button className="btn btn-primary" type="button">Ir al carrito</button>
                    </Link>
                    
                    )
                    :
                    (<ItemCount stock={data.stock} initial={1} onAdd={onAdd} />)
                }
                <button onClick= {()=>removeItem(data.id)} className="btn btn-primary" type="button">Eliminar del carrito</button>
                </div>
                <div className="row">
                    <li className="list-group-item">{data.description} </li>
                </div>
            </div>
            
        </div>
                
                

    </div>
    </>
}
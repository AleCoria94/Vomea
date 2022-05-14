import React from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

export default function ItemDetail({data}){
        let [inCart,setInCart] = React.useState(false);

     function onAdd(contador){
         setInCart(true);
        alert(`Agregaste ${contador} elementos al carrito desde`);
    }
    return <>

    <div className="card d-flex justify-content-around">
        <div className="card-body-sm-3">
            <div className="row">
                <div className="col-sm">
                    <img src={data.img} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="col">
                    <h1 className="list-group-item">{data.name}</h1>
                    <li className="list-group-item">¡Quedan {data.stock} unidad/es disponible/s!</li>
                    <h1 className="list-group-item"> $ {data.price} </h1>

                {
                    inCart ?
                    (
                    <Link to ="/Cart">
                    <button className="btn btn-primary" type="button">Ir al carrito</button>
                    </Link>
                    )
                    :
                    (<ItemCount stock={data.stock} initial={1} onAdd={onAdd} />)
                }

                </div>
                <div className="row">
                    <li className="list-group-item">{data.description} </li>
                </div>
            </div>
        </div>
                
                

    </div>
    </>
}
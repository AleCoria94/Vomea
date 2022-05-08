import React from "react";
import './Item.css'

function Item ({data}){
        const urlpath = "/item/" +data.id ;
        return <>

        <div className="card d-flex justify-content-around">
        <div className="card-body">
      
            <ul className="list-group list-group-flush">
                <img src={data.img} class="card-img-top" widht="100" height="100" alt="..."/>
                <h1 className="list-group-item">{data.name}</h1>
                <li className="list-group-item">¡Quedan {data.stock} unidad/es disponible/s!</li>
                <h1 className="list-group-item"> $ {data.price} </h1>
                <a href={urlpath} className="btn btn-primary btn-sm d-flex">Ver Detalle</a>
          </ul>
            
    </div>
        </div>
        </>
         }
export default Item;
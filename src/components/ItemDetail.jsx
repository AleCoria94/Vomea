import React from 'react'
import './ItemDetail.css'

export default function ItemDetail({data}){
    return <>

    <div className="card d-flex justify-content-around">
        <div className="card-body-sm-3">
            <div class="row">
                <div class="col-sm">
                    <img src={data.img} class="card-img-top img-fluid" alt="..."/>
                </div>
                <div class="col">
                    <h1 className="list-group-item">{data.name}</h1>
                    <li className="list-group-item">¡Quedan {data.stock} unidad/es disponible/s!</li>
                    <h1 className="list-group-item"> $ {data.price} </h1>
                </div>
            </div>
        </div>
                <div class="row">
                    <li className="list-group-item">{data.description} </li>
                </div>
    </div>
    </>
}
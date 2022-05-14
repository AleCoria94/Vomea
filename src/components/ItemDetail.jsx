import React from 'react'
import './ItemDetail.css'

export default function ItemDetail({data}){
     console.log ("llego data acá" + data)
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
                </div>
            </div>
        </div>
                <div className="row">
                    <li className="list-group-item">{data.description} </li>
                </div>
    </div>
    </>
}
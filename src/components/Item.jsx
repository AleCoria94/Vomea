import React from "react";
import './Item.css'

function Item ({data}){
        const url = data.id - 1;
        const urlpath = "/item/" + url ;
        return <>

        <div className="card d-flex">
        <div className="card-body">
                <div className="img">
                    <img src={data.img} class="card-img-top img-fluid" alt="..."/>
                </div>
                
            <ul className="list-group list-group-flush text-center">
                
                <h3 className="list-group-item">{data.name}</h3>
                <h1 className="list-group-item"> $ {data.price} </h1>
                <a href={urlpath} className="btn btn-primary btn-sm d-flex text-center">Ver Detalle</a>
          </ul>
            
    </div>
        </div>
        </>
         }
export default Item;
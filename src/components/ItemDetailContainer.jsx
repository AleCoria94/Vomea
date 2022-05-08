import React from 'react';
import { productsData } from "../data/productsData";
import { useParams } from 'react-router-dom';
import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)

useEffect (() => {
getProducts().then( data => {

    setProducts(data);
})
})
const params = useParams()
const getProducts = ()=>{
    return new Promise ((resolve, eject) =>{
        setTimeout (()=>{
            setLoading(false)
            resolve(productsData[params.id])
        },2000);
    })
}

    return <>
            <div>
                { loading ? 
                <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                :
                <ItemDetail data = {products}/>
            }
        </div> 
    </>
}
export default ItemDetailContainer;

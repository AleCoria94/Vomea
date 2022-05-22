import React from 'react';
import { productsData } from "../data/productsData";
import { useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    
    const[products, setProducts]= useState([])
    const[loading, setLoading] = useState(true)

useEffect (() => {
getProducts().then( data => {
    setProducts(data);
})
})
let{categoryid} = useParams();
console.log("categorrrry: ",categoryid)

const getProducts = ()=>{
    return new Promise ((resolve, eject) =>{
        setTimeout (()=>{
            setLoading(false)
            resolve(productsData)
        },2000);
    })
}

    return (
        <div>
            { loading ? 
            <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            :
            <ItemList products = {products}/ >
            }
        </div> 
    )
}
export default ItemListContainer;

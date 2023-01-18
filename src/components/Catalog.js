import React, { useState, useEffect } from "react";
import ShoeContainer from './ShoeContainer'
import CatalogSearch from "./CatalogSearch";

function Catalog(props){
    const { user } = props
    const catalogUrl = 'http://localhost:3000/shoes'
    const [ shoes, setShoes ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(()=>{
          fetch(catalogUrl)
          .then(r => r.json())
          .then( catalogShoes => setShoes(catalogShoes))
    }, []
    )

    function changeSearch(e){
        setSearchTerm(e.target.value)
    }
    
    const searchFilter = shoes.filter((shoe)=>{
        return shoe.name.toUpperCase().includes(searchTerm.toUpperCase())
    })

    let renderShoes = searchFilter.map((shoe)=> <ShoeContainer 
    user ={user}
    key = {shoe.id}
    shoe = {shoe}/>)

    return(
        <div>
            <CatalogSearch changeSearch = {changeSearch}/>
            <div className="shoeHolder">
                {renderShoes}
            </div>
        </div>
    )
}

export default Catalog;
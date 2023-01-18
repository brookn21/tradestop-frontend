import React from "react";
import { Input } from 'semantic-ui-react'

function CatalogSearch( props ){
    const { changeSearch } = props
    return(
    <div>
    <Input icon='search' placeholder='Search...' onChange={(e)=> changeSearch(e)}/>
    </div>
    )
}

export default CatalogSearch;
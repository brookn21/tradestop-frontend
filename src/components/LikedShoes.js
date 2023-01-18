import React, { useState, useEffect} from "react";
import { Card, Image} from 'semantic-ui-react'


function LikedShoes(props){
    const { like } = props

    const likedShoeUrl = 'http://localhost:3000/shoes/' + like.shoe_id
    const [ shoe, setShoes ] = useState({})
    // const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(()=>{
        fetch(likedShoeUrl)
        .then(r => r.json())
        .then( getShoe => setShoes(getShoe))
  }, []
  )
          function deleteShoe(){
            fetch('http://localhost:3000/likes/' + like.id, {
        method: 'DELETE',
      })
      .then(res => res.josn())
      .then(res => console.log(res))
          }
    return(
        <div>
        <Card className="shoecard">
    <Image src={shoe.image} wrapped ui={false} className="shoeimg" />
    <Card.Content>
      <Card.Header>{shoe.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Retail: ${shoe.price / 100}</span>
      </Card.Meta>
      {/* <Card.Description>
      {listing.description}
      </Card.Description> */}
    </Card.Content>
    <Card.Content extra>
    <i className="red heart icon" onClick={deleteShoe}></i>
    </Card.Content>
    {/* { false ? <i class="heart outline icon"></i> : <i class="red heart icon"></i>} */}
  </Card>
        </div>
        
    )
}

export default LikedShoes;
import React, { useState } from "react";
import { Label, Card, Image} from 'semantic-ui-react'


function ShoeContainer(props){
    const { shoe, user } = props
    const [ liked, setLiked ] = useState(true)

    function changeLike(){
        setLiked(!liked)
    }

    function addToLiked(){
      fetch('http://localhost:3000/likes',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          shoe_id: shoe.id,
          user_id: user.id,
          listing_id: 7
        })
      })
      .then(response => response.json())
      .then(console.log)
    }

    // function deleteFromLiked(){

    return(
        <div className="shoe">
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
      {/* <Label as='a' image>
            <img src='/images/avatar/small/joe.jpg' />
            {listing.user}
            </Label> */}
            { user ? 
             <i class="check circle icon" onClick={addToLiked}></i>
                :
    <i class="check circle icon" ></i>
}
{/*  */}

    </Card.Content>
  </Card>
        </div>
        
    )

}

export default ShoeContainer;
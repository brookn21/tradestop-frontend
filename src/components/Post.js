import React, { useState } from "react";
// import { Icon, Popup} from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { Label, Card, Image} from 'semantic-ui-react'
import '../App.css'

function Post(props){
    const { listing } = props
    const [ liked, setLiked ] = useState(true)

    // function changeLike(){
    //     setLiked(!liked)
    // }
    return(
        <div className="post">
        <Card>
    <Image src={listing.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{listing.title}</Card.Header>
      <Card.Meta>
        <span className='date'>${listing.price}</span>
      </Card.Meta>
      <Card.Description>
        Condition: {listing.condition}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Link to= {`/ListingAccount/` + listing.user.id}
    class="navLink">
    <Label as='a' image>
            <img src={listing.user.img} />
            {listing.user.username}
    </Label>
    </Link>
      
    {/* { user ? 
             liked ? <i className="heart outline icon" onClick={(e) =>{
              changeLike()}
              }></i> : <i className="red heart icon" onClick={(e) =>{
                changeLike()}}></i>
                :
 <i className="heart outline icon"></i>
} */}
    </Card.Content>
    {/* { false ? <i class="heart outline icon"></i> : <i class="red heart icon"></i>} */}
  </Card>
            
        </div>
    )
}





export default Post;
import React from 'react'
import { Label, Card, Image, ListIcon} from 'semantic-ui-react'

function ListedShoe(props){
    const { listing }  = props

    function deleteListing(){
      fetch('http://localhost:3000/listings/' + listing.id, {
  method: 'DELETE',
})
.then(res => res.josn())
.then(res => console.log(res))
    }
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
    <button class="ui negative basic button" onClick={deleteListing}>Delete</button>
      
    </Card.Content>
  </Card>
    </div>
)
}


export default ListedShoe;
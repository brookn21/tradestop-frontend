import React from 'react'
import { Label, Card, Image, ListIcon} from 'semantic-ui-react'

function PublicListing(props){
    const { listing }  = props
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
    </Card.Content>
  </Card>
    </div>
)
}


export default PublicListing;
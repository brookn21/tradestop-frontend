import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react'

function ListShoe(props){
    const{ user } = props
  
      const [ title, setTitle ] = useState("")
      const [ size, setSize ] = useState("")
      const [ condition, setCondition ] = useState("")
      const [ price, setPrice ] = useState(null)
      const [ img, setImg ] = useState("")


      const newListing = {
        title: title,
        size: size,
        condition: condition,
        price: price,
        user_id: user?.id,
        img: img
      }

      function createListing(){
        fetch('http://localhost:3000/listings',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body:JSON.stringify(newListing)
        })
    .then(r => r.json())
    .then(newShoe => console.log(newShoe))
  }
      
      return(
          <div>
              <Form onSubmit={createListing}>
      <Form.Field>
        <label>Title:</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Size:</label>
        <input type="number" value={size} onChange={(e)=>setSize(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Condition:</label>
        <input value={condition} onChange={(e)=>setCondition(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Image Url:</label>
        <input value={img} onChange={(e)=>setImg(e.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input type="number" step="0.01" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <br/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
          </div>
      )
  }

export default ListShoe;
import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';

function HomePage(props){
    const { user } = props
    const [ listings, setLisings] = useState([])

    const listingUrl = "http://localhost:3000/listings"
    useEffect(()=>{
        fetch(listingUrl)
        .then(r => r.json())
        .then( allListings => setLisings(allListings))
  }, []
  )

    return(
        <div>
            <PostContainer listings = { listings }
            user = {user}/>
        </div>
    )
}

export default HomePage;
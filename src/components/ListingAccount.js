import React, { useState, useEffect} from "react";
import { Image, Button } from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import PublicListing from "./PublicListings";
import LikedShoes from './LikedShoes'

function ListingAccount(props){
    let { id } = useParams()

    const [ user, setUser ] = useState({})
    const [ list, setList ] = useState(true)

    const userInfo = 'http://localhost:3000/users/' + id

    useEffect(()=>{
        fetch(userInfo)
        .then(r => r.json())
        .then( userStuff => setUser(userStuff))
  }, []
  )
    const listings = user?.listings
    const likes = user?.likes
    
    const renderListing = listings?.map((listing)=>
        <PublicListing listing ={listing}
        key = {listing.id}/>
    )
    const renderLike = likes?.map((like) =>
        <LikedShoes like ={like}
        key={like.id}/>
    )
    
    return(
        <div>
            <h1>Account</h1>
            <div className="userInfo">
            <Image src={user?.img ? user?.img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} 
            size='medium' circular 
            // onError="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            // alt= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" 
            className="pfp"/> 
            <h1 className="username">{user?.username}</h1>
            <br/>
            {/* <h5 className="bio">{user?.bio}</h5> */}
            <br/>
            {user?.instagram ? <a href={user.instagram} target="_blank"><i class="instagram icon"></i></a> : null} 
             {user?.twitter ? <a href={user.twitter} target="_blank"><i class="twitter icon"></i></a>: null}

            {/* {user?.gralied ? <a href={user.gralied} target="_blank"><i class="google icon"></i></a>: null} */}
             {/* <h1 className="username">{user?.username}</h1> */}
            <h5 className="bio">{user?.bio}</h5>
            <br/>
            <br/> 

                </div>
            <div className="accountButton">
            <Button.Group widths='5'>
            <Button onClick={()=>setList(true)}>Listings</Button>
            <Button onClick={()=>setList(false)}>Likes</Button>
            </Button.Group>

            </div>
            {list ? renderListing : renderLike}
            {/* {renderListing} */}
        </div>
    )
}

export default ListingAccount;

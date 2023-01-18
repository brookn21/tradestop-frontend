import React, { useState, useEffect} from "react";
import { Image, Button } from 'semantic-ui-react'
import ListedShoe from "./ListedShoes";
import LikedShoes from './LikedShoes'

function Account(props){

    const { user } = props
    const [ list, setList ] = useState(true)

    const listings = user?.listings
    const likes = user?.likes
    
    const renderListing = listings?.map((listing)=>
        <ListedShoe listing ={listing}
        key = {listing.id}/>
    )
    const renderLike = likes?.map((like) =>
        <LikedShoes like ={like}
        key={like.id}/>
    )

    // listings.map((listing) =>
    //     <Post listing ={listing}
    //     key={listing.id}/>
    // )
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
            {user?.instagram ? <a href={user.instagram} target="_blank" rel="noreferrer"><i class="instagram icon"></i></a> : null}
            {user?.twitter ? <a href={user.twitter} target="_blank" rel="noreferrer"><i class="twitter icon"></i></a>: null}
            {/* {user?.gralied ? <a href={user.gralied} target="_blank" rel="noreferrer"><i class="google icon"></i></a>: null} */}
            {/* <a href="https://www.instagram.com/" target="_blank"><i class="shopping cart icon"></i></a> */}
            {/* <i class="google icon"></i>
            <i class="shopping cart icon"></i>
    */}
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

export default Account;
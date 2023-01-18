import React from "react";
import Post from './Post'
import "../App.css"

function PostContainer(props){
    const { listings, user } = props

    const renderListing = listings.map((listing) =>
        <Post listing ={listing}
        key={listing.id}
        user={user}/>
    )
    return(
        <div className="listing">
            { renderListing }
        </div>
    )
}

export default PostContainer;
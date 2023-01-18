import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../App.css"

function NavBar(props){
    const { user, setUser } = props

    function signUserOut(){
        localStorage.clear()
        setUser(null)
    }

    // const [ user, setUser ] = useState(true)
return(
    <nav className="nav">
        <a href="/" className="title" class="logo">TradeStop</a>
        <ul>
            <li ><Link to="/catalog" class="navLink">Catalog</Link></li>
            {/* <li><Link to="/notifications" class="navLink">Notifications</Link></li> */}
            { user ? null : <li><Link to="/login" class="navLink">Login/Sign Up</Link></li>}
            {/* {user ? null : <li><Link to="/signup" class="navLink">Sign Up</Link></li>} */}
            {/* <li><Link to="/PostContainer">posts</Link></li> */}
            { user ? <li><Link to="/listings" class="navLink">List Shoes</Link></li> : null}
            { user ? <li><Link to="/account" class="navLink">Account</Link></li> : null}
            { user ? <li onClick={signUserOut}>Sign Out</li> : null}
        </ul>
    </nav>
)
}

export default NavBar;
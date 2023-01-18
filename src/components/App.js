import React, { useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import '../App.css'
import Account from './Account';
import HomePage from './HomePage';
import Notifications from './Notifications'
import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login';
import Catalog from './Catalog'
import SignUp from './SignUp';
import ListShoe from './ListShoes';
import ListingAccount from './ListingAccount';

function App() {
  
  const [ user, setUser ] = useState(null)

  useEffect(()=>{
    if (localStorage.uid)
      fetch("http://localhost:3000/profile",{
        method: 'POST',
        headers: { 
          'content-type': 'application/json',
          'Authenticate': localStorage.uid}
      })
      .then(r => r.json())
      .then( userInfo => setUser(userInfo))
    else
    console.log("No user found")
  }, [])
  return (
    <div className="App">
      <NavBar user = {user} setUser = {setUser}/>
            {/* <h1>Welcome {user?.username}</h1> */}
            <Routes>
                <Route path="/" element={<HomePage user= {user}/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp setUser={setUser} user={user}/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/Account" element={<Account user= {user}/>}/>
                <Route path="/catalog" element={<Catalog user ={user}/>}/>
                <Route path="/Listings" element={<ListShoe user ={user}/>}/>
                <Route path="/ListingAccount/:id"element={<ListingAccount/>}/>
                {/* <Route path="/account" element={user ? <Account setUser={setUser}/>: <Login/>}/> */}
            </Routes>
            {/* <HomePage/> */}
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function SignUp(props){
  const{ user, setUser } = props

    const [ showPassword, setShowPassword] = useState(true)
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")


    function unhidePassword(){
        setShowPassword(!showPassword)
    }

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      password: password,
    username: username,
    email: email
    }

    function createAccount(){
      fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newUser)
      })
  .then(r => r.json())
  .then(userinfo => setUser(userinfo))
}
    
    return(
        <div>
            <Form onSubmit={createAccount}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type={ showPassword ? "password" : null} value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <Checkbox label='Show Password' onClick={unhidePassword}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
        </div>
    )
}

export default SignUp;
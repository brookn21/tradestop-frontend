import React, { useState} from "react";
import { Link } from "react-router-dom"
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function Login(){
  
  const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    function submitUser(e){
        e.preventDefault()
        fetch( "http://localhost:3000/login", {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
          })
          .then( r => r.json())
          .then( user => {
              localStorage.uid = user.uid
              setUsername("")
          setPassword("")
           })
          .catch(err => console.log(err))
    }
    
    return(
        <div>
            <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit= {submitUser}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='username'
            placeholder='Username'
            value={username}
            onChange= {e => setUsername(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange= {e => setPassword(e.target.value)}
          />

          <Button content='Login' primary/>
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Link to="/signup" class="navLink"><Button content='Sign up' icon='signup' size='big'/></Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
        </div>
    )
}

export default Login;
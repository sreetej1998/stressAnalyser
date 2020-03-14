import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Doctor from './walldoc.jpg';

const Auth = props => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let hanldleChange = event => {
    setUsername(event.target.value);
  };
 const  submit=()=>{
      props.setAuth(true);
  }

  let hanldleChangepass = event => {
    setPassword(event.target.value);
  };
  return (
    <div>

   
      <AppBar color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Chat doctor
          </Typography>
        </Toolbar>
      </AppBar>
      <div align="Center">
        <Box m={10} />
        <Box boxShadow={3} >
          <br />
          <br />
          <br></br>
          <TextField
            name="username"
            onChange={hanldleChange}
            helperText="enter your username"
            variant="outlined"
            required="true"
            label="username"
          />
      
          <br />
          <br />

          <TextField
            name="password"
            onChange={hanldleChangepass}
            helperText="enter your password"
            variant="outlined"
            required="true"
            label="password"
          />
    
          <br />
          <br />
          <Button variant="outlined" color="primary" size="large" onClick={submit}>
            submit
          </Button>
          <br />
          <br /> <br />
          <br /> <br />
          <br />


        <img src={Doctor} style={{  
        backgroundImage:Doctor,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} width="100%" height="500"/>
        </Box>


      </div>
    </div>
  );
};

export default Auth;
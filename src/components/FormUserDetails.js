import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const { values, handleChange } = props;

  const next = () => {
    props.nextStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <br/>
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br/>
        <RaisedButton primary={true} label="Next" style={styles.button} onClick={next}/>
       
      </>
    </MuiThemeProvider>
  );
}


const styles = {
  button:{
    margin:15
  }
}
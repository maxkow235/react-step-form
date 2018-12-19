import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormPersonalDetails(props) {
  const { values, handleChange } = props;

  const next = () => {
    props.nextStep();
  };

  const back = () => {
    props.prevStep();
  };

  return (
    <div>
      <MuiThemeProvider>
        <>
          <AppBar title="Personal Details" />

          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <RaisedButton primary={true} label="Next" style={styles.button} onClick={next}/>
          <RaisedButton primary={false} label="Back" style={styles.button} onClick={back} />
        </>
      </MuiThemeProvider>
    </div>
  );
}

const styles = {
  button: {
    margin: 15
  }
};

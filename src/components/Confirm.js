import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export default function Confirm(props) {
  const { values } = props;

  const next = () => {
    props.nextStep();
  };

  const back = () => {
    props.prevStep();
  };

  const toSentenceCase = (str) => {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }

  const renderedList = Object.keys(values).map(key => {
    return <ListItem key={key} primaryText={toSentenceCase(key)} secondaryText={values[key]}/>;
  });

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm" />
          <List>
            {renderedList}
          </List>
        <br />
        <RaisedButton
          primary={true}
          label="Confirm & Submit"
          style={styles.button}
          onClick={next}
        />
        <RaisedButton
          primary={false}
          label="Back"
          style={styles.button}
          onClick={back}
        />
      </>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15
  }
};

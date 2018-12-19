import React from 'react'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export default function Success() {
  return (
    <MuiThemeProvider>
        <>
          <AppBar title="Success!" />

          <h1>Thank You for your submission</h1>
          
        </>
      </MuiThemeProvider>
  )
}

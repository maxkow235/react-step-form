import React, { Component } from "react";

import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

export default class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    email: "",
    occupation: ""
  };

  //Proceed to the next step
  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, email, occupation } = this.state;
    const values = { firstName, email, occupation };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            values={values}
            nextStep={this.nextStep.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            values={values}
            nextStep={this.nextStep.bind(this)}
            prevStep={this.prevStep.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep.bind(this)}
            prevStep={this.prevStep.bind(this)}
          />
        );
      case 4:
        return <Success />;
      default:
        return <div>Error</div>;
    }
  }
}

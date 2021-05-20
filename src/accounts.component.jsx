import React from "react";
import { Button, Pane, TextareaField, TextInputField} from "evergreen-ui";
import TestData from "./testdata";

const AccountForm = (props) => {
    var bgColor = "#A9CCE3";
    return(
        <Pane>
            <Pane backgroundColor={bgColor} borderRadius="10px" padding="5px" paddingLeft="15px" paddingRight="15px" elevation={4} align="left">
                <b halign="left"><u>Account</u></b><br/><br/>
                <TextInputField label="Name" name="accountInput" placeholder="Account Name"></TextInputField>
                <TextInputField label="Link" name="accountLinkInput" placeholder="SFDC Account Link"></TextInputField>
            </Pane>
            <Pane backgroundColor={bgColor} borderRadius="10px" padding="5px" paddingLeft="15px" paddingRight="15px" marginTop="15px" elevation={4} align="left">
                <b halign="left">Opportunity </b><br/><br/>
                <TextInputField label="Name" description="Should be identical to SFDC to make searching easier" name="oppInput" placeholder="Opportunity Name"></TextInputField>
                <TextInputField label="Link" name="oppLinkInput" placeholder="SFDC Opportunity Link"></TextInputField>
                <TextareaField name="oppDescription" label="Description" placeholder="Opportunity Description"></TextareaField>
            </Pane>
            <Pane backgroundColor={bgColor} borderRadius="10px" padding="5px" paddingLeft="15px" paddingRight="15px" marginTop="15px" elevation={4} align="left">
                <b halign="left"><u>Notes</u></b><br/><br/>
                <TextInputField label="" name="accountInput" placeholder="Account Name"></TextInputField>
            </Pane>
        </Pane>
    );
}

export default class Accounts extends React.Component {
  constructor(props) {
    super();
    var data = TestData;
    data.forEach((item) => {
      console.log(item);
    });
    this.state = {showForm: true};
    // this.setState(state);
    console.log("Setting State:", this.state)
  }

  render(props) {
    return (
      <Pane>
        <h2>Accounts Page Here</h2>
        {this.state.showForm ? <AccountForm></AccountForm> : null}
        <br/><br/>
        <Button onClick={this.buttonClickhandler}>Add/Edit Account</Button>
      </Pane>
    );
  }

  buttonClickhandler = (event) => {
          if (this.state) {
          console.log("Button Clicked -  current state is", this.state);
      } else {
          console.log("No state defined");
      }
      var current = this.state
      current.showForm = !current.showForm;
      this.setState(current);
  }
}

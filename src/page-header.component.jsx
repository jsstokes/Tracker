import React from "react";
import { Button, Pane } from "evergreen-ui";
import { Link } from "react-router-dom";

class PageHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Pane width="100%" align="center">
        <Pane
          backgroundColor="lightslategray"
          width="90%"
          paddingTop="15px"
          paddingBottom="15px"
        >
          <h1>Tracker</h1>
        </Pane>
        <Pane width="90%" paddingTop="15px" paddingBottom="15px" align="left">
          <Link to="/">
            <Button
              borderRadius="10px"
              appearance="primary"
              onClick={this.testClick}
            >
              Home
            </Button>
          </Link>
          <Link to="/accounts">
            <Button borderRadius="10px">Accounts</Button>
          </Link>
        </Pane>
      </Pane>
    );
  }

  testClick(event) {
    console.log("Test Click Fired");
  }
}
export default PageHeader;

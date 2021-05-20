import React from "react";
import { Pane, Table } from "evergreen-ui";
import TestData from "./testdata";

export default class HomePage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: TestData,
    };
    this.state.data.forEach((item) => {
      console.log("HomePage:", item);
    });
  }

  render(props) {
      
    return (
      <Pane align="left">
        <Table.Body height={240}>
          {this.state.data.map((profile) => (
            <Table.Row
              key={profile._id}
              isSelectable
              onSelect={() => alert(profile.accountName + ": " + profile.oppName)}
            >
              <Table.TextCell flexBasis={150} flexShrink={0} flexGrow={0}>{profile.accountName}</Table.TextCell>
              <Table.TextCell flexBasis={300} flexShrink={0} flexGrow={0}>{profile.oppName}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Pane>
    );
  }
}

import React from 'react';
import { Pane } from 'evergreen-ui';

class PageHeader extends React.Component {

    constructor( props) {
        super();
        this.state = {};
    }

    render() {
        return(
            <Pane width="100%" align="center">
            <Pane backgroundColor="lightslategray" width="90%" paddingTop="15px" paddingBottom="15px">
                Tracker
            </Pane>
          </Pane>
      
        );
    }
}
export default PageHeader;
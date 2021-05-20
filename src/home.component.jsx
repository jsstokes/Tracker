import React from 'react';
import { Pane } from 'evergreen-ui';

export default class HomePage extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render(props) {
        return(
            <Pane align="left" >
                Home Page Here
            </Pane>
        );
    }
}

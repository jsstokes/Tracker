import React from 'react';
import TestData from './testdata';

export default class Accounts extends React.Component {
    constructor(props) {
        super();
        var data = TestData;
        data.forEach((item) => {
            console.log(item);
        })
    }

    render(props) {
        return(
            <h2>Accounts Page Here</h2>
        );
    }
}
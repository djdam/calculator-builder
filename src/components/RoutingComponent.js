import React, {Component} from 'react';
import { withRouter } from "react-router";

let rComp = class RoutingComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return null;
    }
}


export default (withRouter( rComp ));

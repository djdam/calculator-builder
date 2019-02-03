import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
// import RoutingComponent from './RoutingComponent'
import { withRouter } from "react-router";

let BackButton = withRouter(class BackButton extends Component {
    render() {
        return (
            <IconButton aria-label="Back" onClick={this.props.history.goBack}>
                <ArrowBack></ArrowBack>
                Back
            </IconButton>
        );
    }
});
export default BackButton;
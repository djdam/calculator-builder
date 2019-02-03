import React, { Component } from 'react';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FieldList from './FieldList';
import { withRouter } from "react-router";

let HomeCmpt = class Home extends Component {

  constructor(props){
    super(props);
    this.gotoAddField = this.gotoAddField.bind(this);
    this.state  = { fields: []}
  }

  gotoAddField() {
    this.props.history.push('/addField');
  }

  renderFields () {
    return this.state.fields.map((f) => (
        <div>Name: {f.name} : {f.type}</div>
    ))
  }

  render() {
    return (
        <div>
          <FieldList fields={this.props.fields}/>
          <Fab color="primary" aria-label="Add">
            <AddIcon onClick={this.gotoAddField}/>
          </Fab>
        </div>
    );
  };
}

export default withRouter(HomeCmpt)
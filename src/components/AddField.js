import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
// import RoutingComponent from './RoutingComponent'

import Button from '@material-ui/core/Button';
// import RoutingComponent from "./RoutingComponent";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,

  },
  inputField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const addFieldComponent = class AddField extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', type: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toJson(formData) {
    const formEntryReducer = (obj, entry)=>{
      obj[entry[0]]=entry[1];
      return obj;
    };
    return Array.from(formData.entries())
        .reduce(formEntryReducer, {});
  }
  handleSubmit(event) {
    event.preventDefault();
    let newField = this.toJson(new FormData(event.target));
    this.props.addField(newField);
    // debugger;
    this.props.history.push('/');
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Paper className={classes.root} elevation={1}>
            <TextField
                className={classNames(classes.inputField)}
                required
                label="Name"
                id="name"
                name="name"
                value={this.state.name}
                label="Name of the field"
                margin="normal"
                onChange={this.handleChange}
            />
            <br/>
            <Select
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
                className={classNames(classes.inputField)}>
              <MenuItem>Please select</MenuItem>
              <MenuItem value={'number'}>Number</MenuItem>
              <MenuItem value={'percentage'}>Percentage</MenuItem>
              <MenuItem value={'calculation'}>Calculation</MenuItem>

            </Select>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add
            </Button>
          </Paper>

        </form>
      </div>
    )
  }

}

export default withStyles(styles)(addFieldComponent);
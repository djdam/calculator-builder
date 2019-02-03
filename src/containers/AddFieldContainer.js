import React from 'react'
import { connect } from 'react-redux'
import {addField, goBack} from '../actions'
import AddField from '../components/AddField';

const mapDispatchToProps = dispatch => ({
    addField: field => dispatch(addField(field)),
    goBack: () => dispatch(goBack())
});


const _addField = connect(
    () => ({}),
    mapDispatchToProps
)(AddField);

export { _addField as AddField }
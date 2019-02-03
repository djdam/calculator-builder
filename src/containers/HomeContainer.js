import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home';

const mapStateToProps = state => ({
    fields: state.fields
});

const _homeField = connect(
    mapStateToProps,
    () => { return {}})
(Home);

export { _homeField as Home }
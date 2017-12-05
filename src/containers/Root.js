import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {browserHistory} from 'react-router'

import getRouter from '../router'


export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object
    }

    constructor (props) {
        super()
        this.store = props.store
    }

    render () {
        return (
            <Provider store={this.store}>
                {getRouter()}
            </Provider>
        )
    }
}

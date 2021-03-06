import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import getRouter from '../router'


export default class Root extends Component {
    constructor (props) {
        super()
        this.store = props.store
        this.history = syncHistoryWithStore(browserHistory, props.store)
    }

    render () {
        return (
            <Provider store={this.store}>
                {getRouter(this.history)}
            </Provider>
        )
    }
}

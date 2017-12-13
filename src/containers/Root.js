import React, {Component} from 'react'
import {Provider} from 'react-redux'

import getRouter from '../router'


export default class Root extends Component {
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

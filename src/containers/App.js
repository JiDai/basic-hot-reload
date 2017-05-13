import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import Button from '../components/Button'
import * as counterActions from '../actions/counter'

import '../main.scss'


class App extends Component {
    static propTypes = {
        counter: PropTypes.number,
        actions: PropTypes.object
    }

    render () {
        const {counter, actions} = this.props
        return (
            <div>
                <img src={'/images/ed.gif'} alt="" />
                <h1>{counter}</h1>
                <Link to="/">Home</Link>
                <Link to="/test">Test route</Link>
                <div>
                    <Button handleClick={actions.decrement}>Remove</Button>
                    <Button handleClick={actions.increment}>Add</Button>
                </div>
            </div>
        )
    }
}

function mapState (state) {
    return {
        counter: state.counter
    }
}

function mapDispatch (dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapState, mapDispatch)(App)

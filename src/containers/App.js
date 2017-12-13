import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import * as counterActions from '../actions/counter'

import '../main.scss'
import edUrl from '../assets/images/ed.gif'

class App extends Component {
    static propTypes = {
        counter: PropTypes.number,
        actions: PropTypes.object
    }

    render () {
        const {counter, actions} = this.props
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/test">Test route</Link>
                <div>
                    <Button handleClick={actions.decrement}>Remove</Button>
                    <span className='counter'>{counter}</span>
                    <Button handleClick={actions.increment}>Add</Button>
                </div>
                <img src={edUrl} alt="" />
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

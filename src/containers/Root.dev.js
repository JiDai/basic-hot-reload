import React, { Component } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './App'
import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}

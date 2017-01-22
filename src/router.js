import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from './containers/App'


let getRouter = function (history) {
    return (
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/test" component={App} />
        </Router>
    )
}

export default getRouter

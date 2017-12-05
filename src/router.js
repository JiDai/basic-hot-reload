import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import App from './containers/App'


let getRouter = function () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"
                    component={App} />
                <Route path="/test"
                    component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default getRouter

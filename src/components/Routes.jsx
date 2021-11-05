import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/Transactions' component={Transactions}/>
        </Switch>
    )
}

export default Routes

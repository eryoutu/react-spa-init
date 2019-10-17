import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import User from './views/user/User'
import Home from './views/home/Home'

const BaseRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/user" component={User}></Route>
    </Switch>
  </BrowserRouter>
)

export default BaseRouter
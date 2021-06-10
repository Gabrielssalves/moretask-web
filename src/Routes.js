import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import Workflow from "./components/workflow/Workflow";
import TaskScreen from "./components/workflow/TaskScreen";

const Routes = () => {
    return (
        <Switch>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/register" exact component={UserPage}/>
          <Route path="/" exact component={Workflow}/>
          <Route path="/task" exact component={TaskScreen}/>
        </Switch>
    )
}

export default Routes

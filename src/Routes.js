import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import Workflow from "./components/workflow/Workflow";
import TaskScreen from "./components/workflow/TaskScreen";
import Signout from "./components/layout/Signout";


const Routes = () => {
  const isAdmin = localStorage.getItem('userAdmin');

  return (

    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={UserPage} />
      {isAdmin && <Route path="/workflow" exact component={Workflow} />}
      <Route path="/task" exact component={TaskScreen} />
      <Route path="/signout" exact component={Signout} />
    </Switch>
  )
}

export default Routes

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/layout/Home";
import LoginPage from './components/pages/LoginPage';
import UserPage from './components/pages/UserPage';
import Workflow from "./components/workflow/Workflow";
import TaskScreen from "./components/workflow/TaskScreen";
import NotFound from "./components/layout/NotFound";
import Signout from "./components/layout/Signout";


const Routes = () => {
  const isAdmin = localStorage.getItem('userAdmin');

  return (

    <Switch>
      <Route path="/" exact component={Home} />>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={UserPage} />
      {isAdmin === "true" && <Route path="/workflow" exact component={Workflow} />}
      <Route path="/task" exact component={TaskScreen} />
      <Route path="/signout" exact component={Signout} />
      <Route path='*' exact={true} component={NotFound} />
    </Switch>
  )
}

export default Routes

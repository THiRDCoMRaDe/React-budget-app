import {Router, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import AddExpensePage from "../component/AddExpensePage";
import EditExpensePage from "../component/EditExpensePage";
import NotFoundPage from '../component/NotFoundPage';
import React from "react";
import LoginPage from "../component/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </Router>
);
export default AppRouter;
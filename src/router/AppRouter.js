import {BrowserRouter, Route, Switch} from "react-router-dom";
import ExpenseDashboardPage from "../component/ExpenseDashboardPage";
import AddExpensePage from "../component/AddExpensePage";
import EditExpensePage from "../component/EditExpensePage";
import HelpPage from "../component/HelpPage";
import NotFoundPage from '../component/NotFoundPage';
import Header from "../component/Header";
import React from "react";

const AppRouter = () => (
    <BrowserRouter>
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    </BrowserRouter>
);
export default AppRouter;
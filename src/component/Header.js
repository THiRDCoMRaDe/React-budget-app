import {NavLink} from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";


export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact activeClassName='is-active' to='/dashboard'>Dashboard</NavLink> |
        <NavLink activeClassName='is-active' to='/create'>Create Expense</NavLink> |
        <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);
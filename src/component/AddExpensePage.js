import React from "react";
import { connect } from "react-redux";
//import {addExpense} from "../actions/expenses";
import {startAddExpense } from "../actions/expenses";
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
      return(
          <div>
              <div className="page-header">
                  <div className="content_container">
                    <h1 className="page-header__title">Add Expense</h1>
                  </div>
              </div>
              <div className="content_container">
                  <ExpenseForm
                      onsubmit={this.onSubmit}
                  />
              </div>
              {/*this is from my add expense component*/}
          </div>
      )
    }
}
const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense)) });
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
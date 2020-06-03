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
              <h1>Add Expense</h1>
              <ExpenseForm
                  onsubmit={this.onSubmit}
              />
              {/*this is from my add expense component*/}
          </div>
      )
    }
}
const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense)) });
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <>
        <Link to={`/edit/${id}`}>
            <h3>
                description: {description}
            </h3>
        </Link>
        <p>
            {amount} - {createdAt}
        </p>

    </>
);


export default ExpenseListItem;
//export default ExpenseListItem;
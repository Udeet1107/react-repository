import ExpenseItem from "./ExpenseItem";
import './ExpenseItemList.css'

function ExpenseItemList(props) {
    const items = []
    props.expenses.forEach(expense => {
        items.push(<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)
    });
    return <div className='expenses'>
        {items}
    </div>
}

export default ExpenseItemList;
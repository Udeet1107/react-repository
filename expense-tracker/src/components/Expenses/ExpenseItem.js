import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(expenseProps) {
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseProps.date}/>
            <div className="expense-item__description">
                <h2>{expenseProps.title}</h2>
                <div className="expense-item__price">{expenseProps.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
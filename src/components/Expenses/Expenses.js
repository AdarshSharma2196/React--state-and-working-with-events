import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
function Expenses(props) {
  var expensesItem = props.items
  let data = expensesItem.map((item, index) => (
    <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
    />

  ))
  return (
    <Card className="expenses">
     {data}
    </Card>
  );
}
export default Expenses;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleYear = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectedYear={handleYear} />
      <ExpensesList items={filteredExpenses}/>

    </Card>
  );
};

export default Expenses;

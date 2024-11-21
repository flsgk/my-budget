function Expense({ expenses }) {
  return (
    <div>
      <h2>지출 목록</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.date.toLocaleDateString()} <br />
            {expense.name} {expense.price}원 <br />
            <em>{expense.memo}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Expense;

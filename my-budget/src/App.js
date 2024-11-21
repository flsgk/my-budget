import "./App.css";
import InputData from "./components/InputData";
import Expense from "./components/Expense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]); // 사용자가 입력한 데이터를 저장하는 배열

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }; // 새 데이터를 expense 상태에 추가하되, 최신 데이터를 앞에 추가하여 최신순 정렬 유지

  return (
    <>
      <InputData onAddExpense={addExpenseHandler} />
      {/* props 를 통해 함수 전달 */}
      <Expense expenses={expenses} /> {/* 다른 자식에게 상태 전달 */}
    </>
  );
}

export default App;

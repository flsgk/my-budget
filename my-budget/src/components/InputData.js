import React, { useState } from "react";
import "./InputData.css";

function InputData({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    date: "",
    memo: "",
  });

  const [ismemochecked, setIsMemoChecked] = useState(false); // "메모" 체크박스 상태 관리
  // const [memo, setMemo] = useState(""); // 메모 입력 값 관리

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleMemoCheckbox = (event) => {
    // 체크박스를 클릭하면 실행
    setIsMemoChecked(event.target.checked); //체크박스의 상태를 가져온다. true 인지 false 인지
    if (!event.target.checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        memo: event.target.checked ? "" : undefined,
      }));
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지가 새로고침되는 기본 동작을 막는다.
    if (!formData.name || !formData.price) {
      alert("이름과 가격은 필수 입력값입니다.");
      return;
    }

    const expenseData = {
      // 입력한 데이터를 새로운 객체로 정리
      name: formData.name,
      price: formData.price,
      type: formData.type,
      date: new Date(formData.date), // 날짜를 Date 객채로 변환
      memo: formData.memo,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData); // 부모 컴포넌트로 데이터 전달

    setFormData({
      name: "",
      price: "",
      type: "",
      date: "",
      memo: "",
    });

    setIsMemoChecked(false);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>이름 </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>가격 </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>유형 </label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>구입 날짜 </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min="2023-01-01"
          />
        </div>

        <div>
          <label>메모 </label>
          <input
            type="checkbox"
            checked={ismemochecked}
            onChange={handleMemoCheckbox}
          />
          {ismemochecked && ( //ismemochecked가 true일 때만 메모 입력 필드를 렌더링하도록
            <input
              type="text"
              value={formData.memo}
              onChange={handleChange}
              placeholder="메모를 입력하세요."
            />
          )}
        </div>

        <div>
          <label>재구매의사 </label>
          <input type="radio" id="yes" value="yes" onChange={handleChange} />
          <label for="yes">yes</label>
          <input type="radio" id="no" value="no" onChange={handleChange} />
          <label for="no">no</label>
        </div>

        <button type="submit">추가</button>
      </form>
    </>
  );
}

export default InputData;

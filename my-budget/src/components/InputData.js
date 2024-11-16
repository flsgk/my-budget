import React, { useState } from "react";
import "./InputData.css";

function InputData() {
  const [ismemochecked, setIsMemoChecked] = useState(false); // "메모" 체크박스 상태 관리
  const [memo, setMemo] = useState(""); // 메모 입력 값 관리

  const handleMemoCheckbox = (event) => {
    // 체크박스를 클릭하면 실행
    setIsMemoChecked(event.target.checked); //체크박스의 상태를 가져온다. true 인지 false 인지
    if (!event.target.checked) {
      setMemo("");
    }
  };

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  return (
    <>
      <form>
        <div>
          <label>이름 </label>
          <input type="text" />
        </div>

        <div>
          <label>가격 </label>
          <input type="number" />
        </div>

        <div>
          <label>유형 </label>
          <input type="text" />
        </div>

        <div>
          <label>구입 날짜 </label>
          <input type="date" />
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
              value={memo}
              onChange={handleMemoChange}
              placeholder="메모를 입력하세요."
            />
          )}
        </div>

        <div>
          <label>재구매의사 </label>
          <input type="radio" />
          <input type="radio" />
        </div>
      </form>
    </>
  );
}

export default InputData;

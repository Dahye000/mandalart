// src/Mandalart.jsx

import React from "react";
import "./Mandalart.css"; // 만다라트 스타일을 위한 CSS 파일을 불러옵니다.

function Mandalart() {
  // 3x3 격자를 만들기 위해 9개의 셀을 렌더링합니다.
  const cells = Array.from({ length: 9 });

  return (
    <div className="mandalart-grid">
      {cells.map((_, index) => {
        // 5번째 셀(가운데)에 'center' 클래스를 추가합니다.
        const isCenter = index === 4;
        const cellClass = isCenter ? "mandalart-cell center" : "mandalart-cell";

        return (
          <div key={index} className={cellClass}>
            <textarea placeholder="목표 입력..."></textarea>
          </div>
        );
      })}
    </div>
  );
}

export default Mandalart;

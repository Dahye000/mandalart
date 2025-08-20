// src/App.jsx

import "./App.css";
import Mandalart from "./Mandalart"; // Mandalart 컴포넌트를 불러옵니다.

function App() {
  return (
    <div className="App">
      <h1>만다라트 계획표</h1>
      <Mandalart /> {/* 우리가 만든 Mandalart 컴포넌트를 여기에 추가! */}
    </div>
  );
}

export default App;

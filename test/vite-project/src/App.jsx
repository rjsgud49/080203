import React from "react";
import Counter from "./components/counter";

const App = () => {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter initialCount={5} /> {/* 초기값을 5로 설정 */}
    </div>
  );
};

export default App;

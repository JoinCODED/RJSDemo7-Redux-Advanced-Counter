import React from "react";

import Incrementer from "./Incrementer";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Incrementer step={1} />
        <Incrementer step={-1} />
      </div>
    </div>
  );
}

export default App;

import React from "react";

import Incrementer from "./Incrementer";
import ColorSelector from "./ColorSelector";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Incrementer step={1} />
        <Incrementer step={-1} />
        <ColorSelector />
      </div>
    </div>
  );
}

export default App;

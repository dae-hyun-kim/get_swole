import React from 'react';
import StartScreen from "./routes/StartScreen";
import LayOut from "./components/LayOut/LayOut"

function App() {
  return (
    <div className="App bg">
      <LayOut>
        <StartScreen/>
      </LayOut>
    </div>
  );
}

export default App;

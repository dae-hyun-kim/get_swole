import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import StartScreen from "./routes/StartScreen";
import Home from "./routes/Home"
import LayOut from "./components/LayOut/LayOut";


function App() {
  return (
    <div className="App bg">
      <LayOut>
        <Router>
          <Switch>
            <Route path="/" exact component={StartScreen}/>
            <Route path="/home" exact component={Home} />
          </Switch>
        </Router>
      </LayOut>
    </div>
  );
}

export default App;

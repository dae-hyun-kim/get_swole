import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import StartScreen from "./routes/StartScreen";
import Home from "./routes/Home"
import LayOut from "./components/LayOut/LayOut";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme"


function App() {
  return (
    <div className="App bg">
      <LayOut>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact component={StartScreen}/>
              <Route path="/home" exact component={Home} />
            </Switch>
          </Router>
        </ThemeProvider>
      </LayOut>
    </div>
  );
}

export default App;

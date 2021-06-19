import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import City from "./cities";
import State from "./state";
import District from "./districts";
import Pin from './Findpin';
import Pin1 from './Findpin1';


// function App() {
//   return (
//     <div className="App">
//       <State />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={State} />
            <Route path="/state" component={State} />
            <Route path="/city/:id" component={City} />
            <Route path="/district/:id" component={District} />
            <Route exact path="/findpin/:id?" component={Pin} />
            <Route path="/findpin" component={Pin1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

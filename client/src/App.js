import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Work from "./components/Work";
import Stats from "./components/Stats";

const App = () => (
  <Router>
    <React.Fragment>
      <div>
        <Route exact path="/" component={Menu} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/Stats" component={Stats} />
      </div>
    </React.Fragment>
  </Router>
);
  


export default App;

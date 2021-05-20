import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pane } from 'evergreen-ui';

import HomePage from "./home.component";
import PageHeader from "./page-header.component";
import Accounts from "./accounts.component";

function App() {
  return (
    <Router>
      <Pane width="100%" align="center">
        <PageHeader></PageHeader>
        <Pane width="90%">
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/accounts">
              <Accounts></Accounts>
            </Route>
          </Switch>
        </Pane>
      </Pane>
    </Router>
  );
}

export default App;

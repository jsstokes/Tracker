import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './home.component';
import PageHeader from "./page-header.component";
import Accounts from './accounts.component';

function App() {
  return (
    <Router>
      <PageHeader></PageHeader>
      <Switch>
        <Route exact path="/"><HomePage></HomePage></Route>
        <Route path="/accounts"><Accounts></Accounts></Route>
      </Switch>
    </Router>
  );
}

export default App;

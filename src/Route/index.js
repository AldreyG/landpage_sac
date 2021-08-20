import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sac from "../pages/sac";
import WhatsPage from "../pages/whats";
import Cadastro from "../pages/cadastro";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sac />
        </Route>
        <Route path="/whats">
          <WhatsPage />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

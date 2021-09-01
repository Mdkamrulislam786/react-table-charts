import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import LineChart from "./views/Charts/Chart";
import ValueGenerator from "./views/ValueGenerator/ValueGenerator";

const Routes = () => {
  return (
    <Router>
      <AdminLayout>
        <Switch>
          <Route path="/react-table" exact component={ValueGenerator} />
          <Route path="/charts" exact component={LineChart} />
        </Switch>
      </AdminLayout>
    </Router>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import BarChart from "./views/Charts/BarChart";
import LineChart from "./views/Charts/LineChart";
import ValueGenerator from "./views/Tables/ValueGenerator";

const Routes = () => {
  return (
    <Router>
      <AdminLayout>
        <Switch>
          <Route path="/react-table" exact component={ValueGenerator} />
          <Route path="/charts" exact component={LineChart} />
          <Route path="/barchart" exact component={BarChart} />
        </Switch>
      </AdminLayout>
    </Router>
  );
};

export default Routes;

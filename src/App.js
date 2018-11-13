import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const appRoot = document.getElementById("app");

const ExpenseDashboardPage = () => (
  <div>
    <h1>This is from my ExpenseDashboardPage component</h1>
  </div>
);

const AddExpansePage = () => (
  <div>
    <h1>This is from my AddExpansePage component</h1>
  </div>
);

const EditExpensePage = () => (
  <div>
    <h2>This is from my EditExpensePage component</h2>
  </div>
);

const HelpPage = () => (
  <div>
    <h2>This is from my HelpPage component</h2>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpansePage} exact />
      <Route path="/edit" component={EditExpensePage} exact />
      <Route path="/help" component={HelpPage} exact />
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, appRoot);

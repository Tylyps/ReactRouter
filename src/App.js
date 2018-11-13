import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const ErrorPage = () => (
  <div>
    <h2>ERROR 404</h2> - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpansePage} exact />
        <Route path="/edit" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, appRoot);

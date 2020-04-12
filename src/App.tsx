import React, { Component, MouseEvent } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// STYLE
import './App.css';

// COMPONENT
import { Button, Container } from 'reactstrap';
import PageEmployee from './Pages/PageEmployee';
import PageEmployeeDetaill from './Pages/PageEmployeeDetail';
import { ElementToogle } from './Components/ElementToogle';

type IState = {
  showHomeBtn?: boolean;
  showEmployeeBtn?: boolean;
};

export default class App extends Component<{}, IState> {
  state: IState = {
    showHomeBtn: false,
    showEmployeeBtn: true,
  };

  private handlePreventDefault = <T extends HTMLElement>(
    event: MouseEvent<T>
  ) => () => {
    return event.preventDefault();
  };

  handleBtnClick = (event: MouseEvent<HTMLButtonElement>, key: IState) => {
    return this.setState(
      { showHomeBtn: true, ...key },
      this.handlePreventDefault(event)
    );
  };

  handleBtnHome = (event: MouseEvent<HTMLButtonElement>) => {
    return this.setState(
      { showHomeBtn: false, showEmployeeBtn: true },
      this.handlePreventDefault(event)
    );
  };

  render() {
    const { showHomeBtn, showEmployeeBtn } = this.state;
    return (
      <Router>
        <Container className="app-ts">
          <div className="app-header">
            <ElementToogle isShow={showHomeBtn}>
              <Link to="/">
                <Button outline color="secondary" onClick={this.handleBtnHome}>
                  Home
                </Button>
              </Link>
            </ElementToogle>
            <ElementToogle isShow={showEmployeeBtn}>
              <Link to="/employees">
                <Button
                  outline
                  color="primary"
                  onClick={(event: MouseEvent<HTMLButtonElement>) =>
                    this.handleBtnClick(event, { showEmployeeBtn: false })
                  }
                >
                  Employees
                </Button>
              </Link>
            </ElementToogle>
          </div>

          <div className="app-content">
            <Switch>
              <Route path="/employees" exact component={PageEmployee} />
              <Route path="/employees/:id" component={PageEmployeeDetaill} />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}

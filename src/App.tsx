import React, { Component, MouseEvent } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// STYLE
import './App.css';

// COMPONENT
import { Button, Container } from 'reactstrap';
import HomePage from './Pages/HomePage';
import PagePostDetaill from './Pages/PagePostDetail';
import PageCreatePost from './Pages/PageCreatePost';
import { ElementToogle } from './Components/ElementToogle';

type IState = {
  showHomeBtn?: boolean;
  showCreatePostBtn?: boolean;
};

export default class App extends Component<{}, IState> {
  state: IState = {
    showHomeBtn: false,
    showCreatePostBtn: true,
  };

  private handleEventPersist = <T extends HTMLElement>(
    event: MouseEvent<T>
  ) => () => {
    return event.persist();
  };

  handleBtnClick = (event: MouseEvent<HTMLButtonElement>, key: IState) => {
    return this.setState(
      { showHomeBtn: true, ...key },
      this.handleEventPersist(event)
    );
  };

  handleBtnHome = (event: MouseEvent<HTMLButtonElement>) => {
    return this.setState(
      { showHomeBtn: false, showCreatePostBtn: true },
      this.handleEventPersist(event)
    );
  };

  render() {
    const { showHomeBtn, showCreatePostBtn } = this.state;
    return (
      <Container className="app-ts">
        <div className="app-header">
          <ElementToogle isShow={showHomeBtn}>
            <Link to="/">
              <Button outline color="secondary" onClick={this.handleBtnHome}>
                Home
              </Button>
            </Link>
          </ElementToogle>
          <ElementToogle isShow={showCreatePostBtn}>
            <Link to="/posts/new">
              <Button
                outline
                color="primary"
                onClick={(event: MouseEvent<HTMLButtonElement>) =>
                  this.handleBtnClick(event, { showCreatePostBtn: false })
                }
              >
                New Post
              </Button>
            </Link>
          </ElementToogle>
        </div>

        <div className="app-content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/posts/new" component={PageCreatePost} />
            <Route path="/posts/:id" component={PagePostDetaill} />
          </Switch>
        </div>
      </Container>
    );
  }
}

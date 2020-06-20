import React, { Component } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';

// MODEL
import { Post } from '../../Redux/post/post.model';

// Application State
import { ApplicationState } from '../../Redux/app.state';

// Action
import { FetchPostRequest } from '../../Redux/post/post.action';

// PRESENTATIONAL COMPONENT
import HomePagePresentation from './index.presentation';

type ReactProps = {};

type ReduxProps = {
  posts: Post[];
};

type ReduxDispatchProps = {
  fetchProps: () => void;
};

type IProps = ReactProps & ReduxProps & ReduxDispatchProps;

class HomePageContainer extends Component<IProps> {
  componentDidMount() {
    this.props.fetchProps();
  }

  render() {
    const { posts } = this.props;

    return <HomePagePresentation posts={posts} />;
  }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, ApplicationState> = (
  rootState
) => {
  return {
    posts: rootState.posts.posts,
  };
};

const mapDispatchToProps: MapDispatchToProps<ReduxDispatchProps, {}> = (
  dispatch: any
) => {
  return {
    fetchProps: () => dispatch(FetchPostRequest()),
  };
};

export default connect<
  ReduxProps,
  ReduxDispatchProps,
  ReactProps,
  ApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);

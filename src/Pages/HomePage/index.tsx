import React, { Component } from 'react';
import { connect } from 'react-redux';

// Application State
import { ApplicationState } from '../../Redux/app.state';

// Action
import { FetchPostRequest } from '../../Redux/post/post.action';

// TYPE
import { ContainerProps, PresentationProps } from './index.type';

// PRESENTATIONAL COMPONENT
import HomePagePresentation from './index.presentation';

class HomePageContainer extends Component<ContainerProps> {
  componentDidMount() {
    this.props.fetchProps();
  }

  render() {
    const { posts } = this.props;

    return <HomePagePresentation posts={posts} />;
  }
}

const mapStateToProps = (rootState: ApplicationState): PresentationProps => {
  return {
    posts: rootState.posts.posts,
  };
};

const mapDispatchToProps = {
  fetchProps: FetchPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);

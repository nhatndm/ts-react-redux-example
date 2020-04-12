import React, { Component } from 'react';
import { connect } from 'react-redux';

// Application State
import { ApplicationState } from '../../Redux/app.interface';

// Post State
import { PostState } from '../../Redux/posts/interface';

type IProps = Pick<PostState, 'posts'>;

class HomePage extends Component<IProps> {
  render() {
    return <div>This is Home page</div>;
  }
}

const mapStateToProps = (rootState: ApplicationState): IProps => {
  return {
    posts: rootState.posts.posts,
  };
};

export default connect(mapStateToProps)(HomePage);

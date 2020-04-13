// Post State
import { PostState } from '../../Redux/post/post.state';

// TYPE
import { PostRequest } from '../../Redux/post/post.interface';

type PropsFromState = Pick<PostState, 'posts'>;

type DispatchProps = {
  fetchProps: () => PostRequest;
};

export type PresentationProps = PropsFromState;

export type ContainerProps = PresentationProps & DispatchProps;

// Post State
import { PostState } from '../../Redux/posts/interface';

// TYPE
import { PostRequest } from '../../Redux/posts/interface';

type PropsFromState = Pick<PostState, 'posts'>;

type DispatchProps = {
  fetchProps: () => PostRequest;
};

export type PresentationProps = PropsFromState;

export type ContainerProps = PresentationProps & DispatchProps;

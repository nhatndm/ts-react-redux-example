import { Error } from './base.type';

interface Action<T> {
  readonly type: T;
  readonly error: Error;
}

export type BaseAction<T, K> = Action<T> & K;

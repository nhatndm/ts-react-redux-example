import { Error } from './base.type';

interface Action<T> {
  type: T;
  error: Error;
}

export type BaseAction<T, K> = Action<T> & K;

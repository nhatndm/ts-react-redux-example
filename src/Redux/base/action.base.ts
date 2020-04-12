export interface BaseAction<T> {
  type: T;
  data?: any;
}

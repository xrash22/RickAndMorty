export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}

export interface Pagination<T = any> {
  info: Info;
  results: T[];
}
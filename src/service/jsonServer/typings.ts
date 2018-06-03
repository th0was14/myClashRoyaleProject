export interface Post {
  id: number;
  title: string;
  author: string;
  test: string;
}

export interface Comment {
  body: string;
  postId: number;
}

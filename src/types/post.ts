import IAuthor from './author';

export default interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor | undefined;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

export default interface IPost {
  id: string;
  title: string;
  body: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

import React, { useMemo } from 'react';
import { format } from 'date-fns';
import IPost from '../../models/post';
import IAuthor from '../../models/author';
import { Container } from './styles';

interface IPostProps {
  post: IPost;
  authors: IAuthor[];
}

const Post: React.FC<IPostProps> = ({ post, authors }) => {
  const postFormatted = useMemo(() => {
    return {
      ...post,
      dateFormatted: format(
        new Date(post.metadata.publishedAt),
        'dd/MM/yyyy HH:mm:ss',
      ),
      author: authors.find((auth) => auth.id === post.metadata.authorId),
    };
  }, [post, authors]);

  return (
    <Container>
      <h3>{postFormatted.title}</h3>
      <p>{postFormatted.body}</p>
      <p>
        <span>{postFormatted.author?.name}</span>
        <span>{postFormatted.dateFormatted}</span>
      </p>
    </Container>
  );
};

export default Post;

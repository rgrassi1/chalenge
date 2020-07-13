import React, { useMemo } from 'react';
import { format } from 'date-fns';
import IPost from '../../types/post';
import { Container } from './styles';

interface IPostProps {
  post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const postFormatted = useMemo(() => {
    return {
      ...post,
      dateFormatted: format(
        new Date(post.metadata.publishedAt),
        'dd/MM/yyyy HH:mm:ss',
      ),
    };
  }, [post]);

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

import React, { useMemo } from 'react';
import { FiCalendar } from 'react-icons/fi';
import IPost from '../../models/post';
import { Container } from './styles';

const lastPosts = 3;

interface ISummaryProps {
  posts: IPost[];
}

const Summary: React.FC<ISummaryProps> = ({ posts }) => {
  const summaryPosts = useMemo(() => {
    return posts.filter((_, idx) => idx < lastPosts);
  }, [posts]);

  return (
    <Container>
      <h2>
        <FiCalendar />
        Most Recent Posts
      </h2>
      <ul>
        {summaryPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Summary;

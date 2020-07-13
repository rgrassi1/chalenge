import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import useFetchSummary from '../../hooks/useFetchSummary';
import { Container } from './styles';

const Summary: React.FC = () => {
  const { summary } = useFetchSummary({ latestPosts: 3 });

  return (
    <Container>
      <h2>
        <FiCalendar />
        Most Recent Posts
      </h2>
      <ul>
        {summary.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Summary;

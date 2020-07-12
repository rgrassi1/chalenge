import React from 'react';
import { FiList } from 'react-icons/fi';
import useFetchAuthors from '../../hooks/useFetchAuthors';
import IPost from '../../models/post';
import { Container } from './styles';
import Post from '../Post';

interface IListProps {
  posts: IPost[];
}

const PostList: React.FC<IListProps> = ({ posts }) => {
  const { authors } = useFetchAuthors();

  return (
    <Container>
      <div>
        <h2>
          <FiList />
          List Of Posts
        </h2>
      </div>
      <ul>
        {posts.map((post) => (
          <Post post={post} authors={authors} key={post.id} />
        ))}
      </ul>
    </Container>
  );
};

export default PostList;

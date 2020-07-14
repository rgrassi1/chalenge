import React from 'react';
import { screen, render } from '@testing-library/react';
import Post from '../../components/Post';
import IPost from '../../types/post';

jest.mock('../../hooks/app', () => {
  return {
    useApp: () => ({
      authors: [
        { id: 1, name: 'Lee Marvin' },
        { id: 2, name: 'Robert Ryan' },
      ],
    }),
  };
});

describe('Post component', () => {
  const post: IPost = {
    id: '1',
    title: 'New Post',
    body: 'New Post',
    metadata: {
      authorId: 1,
      publishedAt: '2020-07-11T15:44:47',
    },
  };

  it('should be able to render an post', () => {
    render(<Post post={post} />);

    const paragraphs = screen.getAllByRole('paragraph');

    expect(screen.getByRole('listitem').firstChild?.nodeName).toBe('H3');

    expect(screen.getByRole('heading').textContent).toBe('New Post');

    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toBe('New Post');
    expect(paragraphs[1].children.length).toBe(2);
    expect(paragraphs[1].children[0].textContent).toBe('Lee Marvin');
    expect(paragraphs[1].children[1].textContent).toBe('11/07/2020 15:44:47');
  });
});

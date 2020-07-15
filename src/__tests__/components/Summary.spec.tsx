import React from 'react';
import { screen, render } from '@testing-library/react';
import Summary from '../../components/Summary';

jest.mock('../../hooks/useFetchSummary', () => {
  return () => ({
    summary: [
      {
        id: '1',
        title: 'New Post',
        body: 'New Post',
        metadata: {
          authorId: 1,
          publishedAt: '2020-07-11T14:30:00',
        },
      },
      {
        id: '2',
        title: 'New Post 2',
        body: 'New Post 2',
        metadata: {
          authorId: 2,
          publishedAt: '2020-07-11T15:44:47',
        },
      },
    ],
  });
});

describe('Summary component', () => {
  it('should be able to render a Summary', () => {
    render(<Summary />);
    expect(screen.getAllByRole('heading')[0].nodeName).toBe('H2');
    expect(screen.getAllByRole('heading')[0].childNodes[0].nodeName).toBe(
      'svg',
    );
    expect(screen.getAllByRole('heading')[0].childNodes[1].textContent).toBe(
      'Most Recent Posts',
    );

    expect(screen.getByRole('list').nodeName).toBe('UL');
    expect(screen.getByRole('list').childNodes.length).toBe(2);

    const list = screen.getByRole('list').childNodes;
    list.forEach((li) => {
      expect(li.nodeName).toBe('LI');
      expect(li.childNodes.length).toBe(1);
      expect(li.firstChild?.nodeName).toBe('H3');
    });
    expect(list[0].firstChild?.textContent).toBe('New Post');
    expect(list[1].firstChild?.textContent).toBe('New Post 2');
  });
});

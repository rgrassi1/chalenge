import React from 'react';
import { screen, render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header component', () => {
  it('should be able to render a Header', () => {
    render(<Header />);

    expect(screen.getByRole('banner').nodeName).toBe('HEADER');
    expect(screen.getByRole('banner').firstChild?.nodeName).toBe('H1');
    expect(screen.getAllByRole('heading').length).toBe(1);
  });
});

import React from 'react';
import { screen, render } from '@testing-library/react';
import { FiTarget } from 'react-icons/fi';
import ButtonLink from '../../components/ButtonLink';

describe('ButtonLink component', () => {
  it('should be able to render a ButtonLink', () => {
    render(<ButtonLink url="http://localhost">Link</ButtonLink>);

    expect(screen.getByRole('link').nodeName).toBe('A');
    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'http://localhost',
    );
    expect(screen.getByRole('link').textContent).toBe('Link');
    expect(screen.getByRole('link').childNodes.length).toBe(1);
  });

  it('should be able to render a ButtonLink with a Icon', () => {
    render(
      <ButtonLink url="http://localhost" icon={FiTarget}>
        Link
      </ButtonLink>,
    );
    expect(screen.getByRole('link').getAttribute('href')).toBe(
      'http://localhost',
    );
    expect(screen.getByRole('link').textContent).toBe('Link');

    expect(screen.getByRole('link').childNodes.length).toBe(2);
    expect(screen.getByRole('link').childNodes[0].nodeName).toBe('svg');
    expect(screen.getByRole('link').childNodes[1].textContent).toBe('Link');
  });
});

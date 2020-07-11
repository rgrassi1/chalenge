import styled from 'styled-components';

export const Container = styled.a`
  background: #444;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.9em;
  font-family: 'Dosis';
  font-weight: 500;
  letter-spacing: 0.1em;

  transition: background 0.3s;

  &:hover {
    background: #fff;
    color: #c66;
  }
`;

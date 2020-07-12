import styled from 'styled-components';

export const Container = styled.a`
  background: #444;
  border-radius: 4px;
  padding: 12px 16px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  transition: background 0.3s;

  > svg {
    vertical-align: middle;
  }

  &:hover {
    background: #fff;
    color: #c66;
  }
`;

import styled from 'styled-components';

export const Container = styled.li`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 32px 32px 32px;
  position: relative;

  &:hover {
    background: #fff;
  }

  > h3 {
    font-size: 2em;
    font-weight: 700;
    padding: 16px 0;
    text-transform: uppercase;
    color: #aaa;
    font-size: 1.5em;
  }

  > h3:hover {
    color: #c66;
  }

  > p {
    font-size: 1.75em;
    color: #444;
    font-weight: 400;
  }

  > p + p {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;

    position: relative;
  }

  > div > h2 {
    display: flex;
    align-items: center;

    color: #444;
    font-size: 3em;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 38px;
  }

  > div > h2 > svg {
    margin-right: 8px;
  }

  > ul {
    margin-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  > ul > li > p {
    font-size: 1.75em;
    color: #444;
    font-weight: 400;
  }

  > ul > li > p + p {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }
`;

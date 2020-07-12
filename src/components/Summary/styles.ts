import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    color: #444;
    font-size: 3em;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 32px;
    letter-spacing: 3px;
    line-height: 38px;
  }

  > h2 > svg {
    vertical-align: -10%;
    margin-right: 8px;
  }

  > ul {
    margin-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    list-style: none;
  }

  > ul > li {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px 32px 16px 32px;
  }

  > ul > li:hover {
    background: #fff;
  }

  > ul > li > h3 {
    font-weight: 700;
    text-transform: uppercase;
    color: #aaa;
    font-size: 1.5em;
  }

  > ul > li > h3:hover {
    color: #c66;
  }
`;

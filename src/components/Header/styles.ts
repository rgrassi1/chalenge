import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 32px;

  > h1 {
    font-family: 'dosis', sans-serif;
    font-size: 6em;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 600;
  }

  > p {
    margin-top: 32px;
    font-size: 2.75em;
    font-weight: 500;
    line-height: 1.5;
  }

  > ul {
    list-style: none;
    margin-top: 32px;
  }

  > ul > li {
    display: inline-block;
  }

  > ul > li + li {
    margin-left: 8px;
  }

  > ul > li > a {
    background: #444;
    border-radius: 4px;
    padding: 12px 18px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5em;
    font-family: 'Dosis';
    font-weight: 600;
    letter-spacing: 0.1em;

    transition: background 0.3s;
  }

  > ul > li:last-child > a {
    color: #444;
    font-size: 1.5em;
    font-weight: 500;
    background: transparent;
  }

  > ul > li:last-child > a > svg {
    margin-right: 8px;
  }

  > ul > li > a:hover {
    background: #fff;
    color: #c66;
  }

  > ul > li > a > svg {
    vertical-align: middle;
  }
`;

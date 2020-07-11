import React from 'react';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Container } from './styles';
import ButtonLink from '../ButtonLink';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Rodrigo Grassi</h1>
      <p>
        Full Stack Developer from the Brasil, focusing his efforts on creating
        useful software products. One day he hopes to make something that really
        make the difference in the life of peoples.
      </p>
      <ul>
        <li>
          <ButtonLink
            url="https://twitter.com/rgrassi1983"
            icon={FiTwitter}
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <ButtonLink
            url="https://www.linkedin.com/in/rgrassi1983"
            icon={FiLinkedin}
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </Container>
  );
};

export default Header;

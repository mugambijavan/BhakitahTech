import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div3, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <DiCssdeck size="3rem" /> <span>BhakitahTech</span>
      </Link>
    </Div1>

    <Div3>
      <SocialIcons href="https://github.com/mugambijavan" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/javan-mugambi-2351a81b0/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/_javoh._/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

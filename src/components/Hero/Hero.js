import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello There,  <br />
          Welcome To <br />
          BhakitahTech
        </SectionTitle>
        <SectionText>
        Our mission is to turn your ideas into reality through cutting-edge software solutions. With a focus on innovation and attention to detail, we empower your business to thrive in the digital landscape.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

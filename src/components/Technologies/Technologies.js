import React from 'react';
import { DiReact, DiNodejs, DiCss3, DiJavascript1, DiDatabase, DiSecurity, DiCloud } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListContainer, ListTitle, ListParagraph } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Empowering Innovations Through Technology</SectionTitle>
    <SectionText>
      At BhakitahTech, our commitment to excellence is reflected in our adept use of cutting-edge technologies, agile development methodologies, and robust security practices.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Technologies</ListTitle>
          <ListParagraph>
            Mastering the art of crafting engaging user interfaces using:
            <br />
            <DiReact /> React.js <br />
            <DiReact /> Next.js <br />
            <DiJavascript1 /> Javascript <br />
            <DiCss3 /> HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End Technologies</ListTitle>
          <ListParagraph>
            Leveraging powerful back-end technologies for robust solutions:
            <br />
            <DiNodejs /> Node.js <br />
            <DiNodejs /> Typescript <br />
            <DiNodejs /> Tailwind <br />
            <DiDatabase /> SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSecurity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Security and Ethical Hacking</ListTitle>
          <ListParagraph>
            Ensuring the highest level of security through:
            <br />
            <DiSecurity /> Rigorous security audits <br />
            <DiSecurity /> Ethical hacking practices <br />
            <DiSecurity /> Proactive vulnerability assessments
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCloud size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Harnessing the power of cloud computing for scalability and efficiency:
            <br />
            <DiCloud /> Cloud infrastructure deployment <br />
            <DiCloud /> Optimization for performance <br />
            <DiCloud /> Seamless integration for agile development
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSecurity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Agile Development</ListTitle>
          <ListParagraph>
            Embracing agile methodologies for iterative and collaborative development:
            <br />
            <DiSecurity /> Adaptive planning and flexibility <br />
            <DiSecurity /> Continuous feedback loops <br />
            <DiSecurity /> Rapid responses to changing requirements
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>BhakitahTech-Stack</SectionTitle>
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
            Experiece with <br />
            React.js <br />
            Next.js <br />
            Javascript <br />
            HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End Technologies</ListTitle>
          <ListParagraph>
             Node.js <br />
             Mongo DB <br />
             SQL <br />
             PayLoad CMS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Agile Development</ListTitle>
          <ListParagraph>
            Adaptive planning and flexibility <br />
             Continuous feedback loops <br />
             Rapid responses to changing requirements
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

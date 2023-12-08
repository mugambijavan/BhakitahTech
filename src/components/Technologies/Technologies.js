import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCodeBraces } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Driving Growth with Cutting-Edge Technologies</SectionTitle>
    <SectionText>
      We pride ourselves on expertise in various domains, employing innovative technologies to craft seamless solutions.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Technologies</ListTitle>
          <ListParagraph>
            Our front-end development harnesses the power of modern frameworks like React.js and Next.js, complemented by proficient use of Javascript, HTML, and CSS. These technologies form the backbone of captivating user interfaces and seamless user experiences.
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
            In the back-end domain, our team excels in utilizing Node.js, Typescript, Tailwind, and SQL. These technologies are instrumental in building robust server-side applications, ensuring scalable, secure, and high-performing systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBraces size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Agile Development Methodology</ListTitle>
          <ListParagraph>
            Our development process is deeply rooted in the Agile methodology. We embrace iterative development, quick feedback cycles, and adaptive planning. This ensures flexibility, responsiveness to change, and constant collaboration with clients throughout the project lifecycle.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Security & Ethical Hacking</ListTitle>
          <ListParagraph>
            Security is our priority. Our team is well-versed in implementing security measures, conducting ethical hacking exercises, and employing best practices to fortify systems against potential vulnerabilities, ensuring data integrity and user privacy.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph>
            Leveraging the potential of cloud computing services, we optimize scalability, reliability, and performance. Our proficiency in cloud platforms enables us to build resilient and cost-effective solutions, empowering businesses to thrive in the digital era.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

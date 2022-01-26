import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { PeriodEntry } from './PeriodEntry';
import { H3 as Heading3, Paragraph as P, Subtext, H4 } from './Typography';

const Container = styled.section`
  padding: 2rem 0rem 0rem;
`
const H3 = styled(Heading3)`
  margin-bottom: 0;
`
const Paragraph = styled(P)`
  margin-top: 0rem;
`
const SectionContainer = styled.section`
  margin-bottom: 2rem;
`
export function Technologies(props) {
  return (
    <Container>
      <Heading>Technologies &amp; Skills</Heading>
      <H3>Expert In</H3>
        <SectionContainer>
          <Paragraph>
          These are technologies I use in my daily work; I follow their latest trends and best practices closely:
          <br /><strong> JavaScript, TypeScript, html5, css3, reactjs, redux, angular, 
          <br /> Progressive Web Apps, Web Components 
          <br /> git, docker, jenkins</strong>
          </Paragraph>
        </SectionContainer>
        <SectionContainer>
          <H3>Dabbles In</H3>
          <Paragraph>
          These are technologies I use sometimes, and have hands on experience with:
          <br /><strong> nodejs, java, jenkins, aws, mysql, algolia search</strong>
          </Paragraph>
        </SectionContainer>

        <SectionContainer>
          <H3>Knows about</H3>
          <Paragraph>
          These are technologies I have used in the past, but not recently:
          <br /><strong> kotlin, PHP, python, spring framework</strong>
          </Paragraph>
        </SectionContainer>
    </Container>
  );
}